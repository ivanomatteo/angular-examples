import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-http-client',
  template: `

    <div class="p-3 border border-warning">
      <h2>Headers:</h2>
      <ul>
          <li *ngFor="let h of headers">{{h.key}}: {{h.value}}</li>
      </ul>

      <div>
        <h2>Profile (json):</h2>
        <pre>{{profile | json}}</pre>
      </div>

    </div>

    <div>
        <h2>Posts:</h2>
        <div *ngFor="let p of posts" class="border p-3 mb-1">
            <h3>{{p.title}}</h3>

            <p>
                {{p.body}}
            </p>

        </div>
    </div>

    <div class="mt-4">
    <h2>Posts with comments:</h2>
      <div *ngFor="let p of postsWithComments" class="border p-3 mb-1">
          <h3>{{p.title}}</h3>

          <p>
              {{p.body}}
          </p>

          <p *ngFor="let c of p.comments" class="border border-primary rounded p-1 mb-1">
            {{ c.body }}
          </p>

        </div>
    </div>



  `,
  styles: []
})
export class HttpClientComponent implements OnInit {

  baseurl = environment.baseurl;

  posts;
  headers;

  profile;

  postsWithComments;

  constructor(private http: HttpClient) { }

  ngOnInit() {



    // simple get
    this.http.get(this.baseurl + '/posts').subscribe(resp => {
      this.posts = resp;
    });


    // get the full HttpRespose Object
    this.http.get(this.baseurl + '/profile',
      {
        observe: 'response'   // the parameter observe:response, allow to get the
      }                       // HttpRespose Object instead of just he body
    ).subscribe(resp => {
      // we can read the response headers for example
      this.headers = resp.headers.keys().map(k => {
        return { key: k, value: resp.headers.get(k) };
      });
      this.profile = resp.body;
    });




    // Multiple correlated requests:
    // forkjoin allow to wait until all asynchronous operations are complete
    forkJoin(
      this.http.get(this.baseurl + '/posts', {
        params: {
          id: ['1', '2']
        }
      }),
      this.http.get(this.baseurl + '/comments', {
        params: {
          postId: ['1', '2']
        }
      }),
    ).subscribe(
      (resp: any) => { // resp: is an array of results

        this.postsWithComments = resp[0];

        const commentsByPostId = resp[1].reduce( // convert the array to an object using postId as key
          (accumulator, item) => {

            if (!accumulator[item['postId']]) {
              accumulator[item['postId']] = [];
            }

            accumulator[item['postId']].push(item);
            return accumulator;
          },
          {} // initial accumulator value
        );

        for (const p of this.postsWithComments) {
          p.comments = commentsByPostId[p.id];
        }



      },
      err => {
        console.log('err: ', err);
      }
    );


  }

}
