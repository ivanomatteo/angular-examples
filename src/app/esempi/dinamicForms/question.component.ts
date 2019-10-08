import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QuestionBase } from './classes/question-base';

@Component({
  selector: 'app-question',
  template: `

      <label [attr.for]="question.key">{{question.label}}</label>

      <div [ngSwitch]="question.controlType">

          <input *ngSwitchCase="'textbox'" [formControl]="fcontrol"
                  [id]="question.key" [type]="question['type']">

          <app-select *ngSwitchCase="'dropdown'" [question]="question"
                  [fcontrol]="fcontrol"></app-select>

      </div>


      <div class="errorMessage" *ngIf="!isValid">{{question.label}} is required</div>

  `,
  styles: []
})
export class QuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() fcontrol: FormControl;
  get isValid() { return this.fcontrol.valid; }


  constructor() { }

  ngOnInit() {
  }
}
