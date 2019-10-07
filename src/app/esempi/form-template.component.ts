import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-form-template',
  template: `


  <div class="container">
      <h1>Form Template Driven</h1>

        <form #form="ngForm" (submit)="submit(form.value)">

          <div class="form-group">
            <label for="name">Name</label>
            <input type="text"  name="name" ngModel required>
          </div>

          <div class="form-group">
            <label for="alterEgo">Alter Ego</label>
            <input type="text" name="alterEgo" ngModel >
          </div>

          <button type="submit" class="btn btn-success" >Submit</button>
        </form>
        <br><pre>{{form.value | json}}</pre>
  </div>

  <div class="container">
  <h1>Form Template Driven with model</h1>

    <form #form2="ngForm" (submit)="submit(model)">

      <div class="form-group">
        <label for="name">Name</label>
        <input type="text"  name="name" [(ngModel)]="model.name" required>
      </div>

      <div class="form-group">
        <label for="alterEgo">Alter Ego</label>
        <input type="text" name="alterEgo"
          [ngModel]="model.alterEgo"
          (ngModelChange)="model.alterEgo = $event.trim()"    >
      </div>
      <div class="form-group">
        <label for="alterEgo">Cognome</label>
        <input type="text" name="cognome"
          [ngModel]="model.cognome | uppercase"
          (ngModelChange)="model.cognome = uppercase.transform($event)"    >
      </div>

      <button type="submit" class="btn btn-success" >Submit</button>
    </form>
    <br><pre>{{model | json}}</pre>
</div>
  `,


  styles: [`
    label{ display: block;}
  `],

  providers: [UpperCasePipe]

})
export class FormTemplateComponent implements OnInit {

  model: any = {};

  constructor(public uppercase: UpperCasePipe) { }

  ngOnInit() {

  }

  submit(value) {
    console.log('form submit value: ', value);
  }



}
