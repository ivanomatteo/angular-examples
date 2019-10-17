import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-http-client',
  template: `

    <div>
      <h2>Headers:</h2>
      <ul>
          <li *ngFor="let h of headers">{{h.key}}: {{h.value}}</li>
      </ul>
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


    <div *ngIf="postWithComments">
        <h2>post With Comments:</h2>
        <div class="border p-3 mb-1">
            <h3>{{postWithComments.title}}</h3>

            <p>
                {{postWithComments.body}}
            </p>

            <h4>Comments:</h4>
            <p *ngFor="let c of postWithComments.comments" class="border border-primary p-2">
              {{c.body}}
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

  postWithComments;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get(this.baseurl + '/posts', { observe: 'response' }).subscribe(resp => {

        this.headers = resp.headers.keys().map(k => {
          return { key: k, value: resp.headers.get(k) };
        });

        this.posts = resp.body;
    });

    forkJoin(
      this.http.get(this.baseurl + '/posts/1'),
      this.http.get(this.baseurl + '/comments?postId=1'),
    ).subscribe(
      resp => {
        this.postWithComments = resp[0];
        this.postWithComments.comments = resp[1];
        console.log('this.postWithComments: ', this.postWithComments);
      },
      err => {
        console.log('err: ', err);
      }
    );


  }

}
