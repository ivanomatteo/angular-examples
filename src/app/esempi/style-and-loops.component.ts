import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-and-loops',



  template: `
      <h1 [style.color]="'green'">Buongiorno {{nome}}</h1>

      oggi è {{oggi | uppercase}}

      <div class="blocco" [style.width.px]="80" >block</div>


      <pre [ngStyle]="{'background-color':'pink'}">
        {{giorniSettimana | json}}
      </pre>

      <ul>
        <!-- trackBy: serve per migliorare le performace,
            può essere anche una funzione che restituisce l'dentificativo univoco
        -->
        <ng-container *ngFor="let g of giorniSettimana; let i = index; trackBy: trackByFn; " [ngSwitch]="g">

          <li id="xxx" *ngSwitchCase="'lun'"  >
           {{i}} - {{g}} - il primo giorno della settimana
          </li>
          <li id="xxx" *ngSwitchCase="'gio'"  >
            {{i}} - {{g}} - giovedi gnocchi
          </li>
          <li id="xxx" *ngSwitchDefault [ngClass]="{'text-blue': g === 'dom'}" >
            {{i}} - {{g}}
          </li>
        </ng-container>
      </ul>


      <p [ngStyle]="stileParagrafo">
        Minim culpa aute minim adipisicing sit.
      </p>


      <button (click)="classiParagrafo2.grassetto = !classiParagrafo2.grassetto" >grassetto</button>
      <button (click)="classiParagrafo2.sottolineato = !classiParagrafo2.sottolineato" >sottolineato</button>
      <button (click)="classiParagrafo2.corsivo = !classiParagrafo2.corsivo" >corsivo</button>

      <p [ngClass]="classiParagrafo2" >
        Irure sunt sint occaecat fugiat exercitation nulla do do laborum ea tempor enim.
        Nostrud magna irure aliquip elit ad est ea cupidatat et sint incididunt sit cillum magna.
        Consectetur anim consequat ea ad irure cillum duis deserunt quis.
        In velit tempor cillum ullamco reprehenderit consectetur occaecat mollit minim. Esse proident
        laboris do tempor irure. Consectetur nostrud exercitation sint officia commodo proident enim aute
        ipsum laborum ullamco. Anim cupidatat veniam laborum Lorem.
      </p>

      <button (click)="dammiUnNumero()" >dammi un numero</button>
      <div *ngFor="let n of numeriACaso" >
        <div *ngIf="n > 500">
          {{n}}
        </div>
        <div *ngIf="n <= 500">
          è <= 500
        </div>
      </div>

  `,


  styles: [`
    .blocco{ text-align: center; display:inline-block; border: 1px solid black;}
    .text-blue{ color: blue; }
    .grassetto{ font-weight: bold; }
    .sottolineato{ text-decoration: underline; }
    .corsivo{ font-style: italic; }
  `]


})




export class StyleAndLoopsComponent implements OnInit {


  nome = 'Pinco pallino';
  oggi;
  giorniSettimana = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];
  stileParagrafo = { 'font-weight': 'bold', 'font-size': '1.5em', color: 'purple' };

  classiParagrafo2 = { grassetto: false, sottolineato: false, corsivo: false, };

  numeriACaso = [];

  constructor() { }

  ngOnInit() {
    this.oggi = this.getOggi();
  }

  getOggi() {
    const day = new Date().getDay();

    return this.giorniSettimana[day - 1];
  }

  dammiUnNumero() {
    this.numeriACaso.push(Math.floor((Math.random() * 1000) + 1));
  }

  trackByFn(index, item) {
    return index;//item.id;
  }
}
