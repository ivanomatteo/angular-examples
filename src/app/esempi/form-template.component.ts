import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Pippo } from './dependency-injection';

@Component({
  selector: 'app-form-template',
  template: `

  <label>
    <input type="checkbox" ngModel #showForm1="ngModel" [ngModel]="true">
    mostra il form 1
  </label>

  <div *ngIf="showForm1.value" class="container">

      <h1>Form Template Driven</h1>

      <!-- (submit) e (ngSubmit) funzionano entrambi, ma (ngSubmit) ci assicura
      che non venga effettuato un post reale che provochi il cambio di pagina -->
        <form #form="ngForm" (ngSubmit)="submit(form.value)">

          <div class="form-group">
            <label for="name">Name</label>
            <input type="text"  name="name" #name="ngModel" ngModel required>
            <app-form-control-errors [fControl]="name"></app-form-control-errors>
          </div>

          <div class="form-group">
            <label for="alterEgo">Alter Ego</label>
            <input type="text" name="alterEgo" #alterEgo="ngModel" ngModel required>
            <div *ngIf="alterEgo.errors['required']" class="text-danger">
              Il campo è obbligatorio
            </div>
          </div>

          <button type="submit" class="btn btn-success" >Submit</button>
        </form>
        <br><pre>{{form.value | json}}</pre>
  </div>




  <label>
    <input type="checkbox" ngModel #showForm2="ngModel" [ngModel]="true">
    mostra il form 2
  </label>

  <div *ngIf="showForm2.value"  class="container">
  <h1>Form Template Driven with model</h1>

   <!-- (submit) e (ngSubmit) funzionano entrambi, ma (ngSubmit) ci assicura
      che non venga effettuato un post reale che provochi il cambio di pagina -->
    <form #form2="ngForm" (ngSubmit)="submit(model)">

      <div class="form-group">
        <label>Name</label>
        <input type="text"  name="name" [(ngModel)]="model.name" required>
      </div>

      <div class="form-group">
        <label>Alter Ego</label>
        <input type="text" name="alterEgo"
          [ngModel]="model.alterEgo"
          (ngModelChange)="model.alterEgo = $event.trim()"    >
      </div>
      <div class="form-group">
        <label>Cognome</label>
        <input type="text" name="cognome"
          [ngModel]="model.cognome | uppercase"
          (ngModelChange)="model.cognome = uppercase.transform($event)"    >
      </div>


      <div class="form-group">
          <label>Provincia</label>
          <select #prov="ngModel" class="form-control"
            name="provincia"
            (ngModelChange)="model.provincia = $event"
            [ngModel]="model.provincia?model.provincia:null"
          >
            <option [ngValue]="null" [selected]="true">--</option>
            <option *ngFor="let pr of province" [ngValue]="pr">{{pr}}</option>
          </select>

      </div>



      <button type="submit" class="btn btn-success" >Submit</button>
    </form>
    <br>
    <pre>{{model | json}}</pre>

</div>





<div class="container">
<h1>Form HTML STANDARD</h1>

  <form ngNoForm action="/yourPage" target="_blank" method="post">

    <div class="form-group">
      <label>Name</label>
      <input type="text"  name="name">
    </div>

    <button type="submit" class="btn btn-success" >Submit</button>
  </form>
  <br>

</div>

  `,


  styles: [`
    label{ display: block;}
  `],

  providers: [UpperCasePipe]

})
export class FormTemplateComponent implements OnInit {

  model: any = {};

  province = [
    'AG', 'AL', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AT', 'AV', 'BA', 'BG', 'BI', 'BL', 'BN', 'BO', 'BR',
    'BS', 'BT', 'BZ', 'CA', 'CB', 'CE', 'CH', 'CL', 'CN', 'CO', 'CR', 'CS', 'CT', 'CZ', 'EN', 'FC',
    'FE', 'FG', 'FI', 'FM', 'FR', 'GE', 'GO', 'GR', 'IM', 'IS', 'KR', 'LC', 'LE', 'LI', 'LO', 'LT',
    'LU', 'MB', 'MC', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NA', 'NO', 'NU', 'OR', 'PA', 'PC', 'PD',
    'PE', 'PG', 'PI', 'PN', 'PO', 'PR', 'PT', 'PU', 'PV', 'PZ', 'RA', 'RC', 'RE', 'RG', 'RI', 'RM',
    'RN', 'RO', 'SA', 'SI', 'SO', 'SP', 'SR', 'SS', 'SU', 'SV', 'TA', 'TE', 'TN', 'TO', 'TP', 'TR',
    'TS', 'TV', 'UD', 'VA', 'VB', 'VC', 'VE', 'VI', 'VR', 'VT', 'VV'
  ];

  constructor(public uppercase: UpperCasePipe, private pippo: Pippo) {
    console.log('pippo: ', pippo);

  }

  ngOnInit() {

  }

  submit(value) {
    console.log('form submit value: ', value);
  }



}
