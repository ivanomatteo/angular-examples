import { Component, OnInit, Input } from '@angular/core';
import { QuestionControlService } from './question-control.service';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './classes/question-base';
import { DropdownQuestion } from './classes/dropdown-question';
import { TextboxQuestion } from './classes/textbox-question';

@Component({
  selector: 'app-dynamic-form',
  template: `
      <div>
      <form (ngSubmit)="onSubmit()" [formGroup]="form">

        <div *ngFor="let question of questions | sort:{key:'order'}" class="form-row">
          <app-question [question]="question" [fcontrol]="form.controls[question.key]" ></app-question>
        </div>

        <div class="form-row">
          <button type="submit" [disabled]="!form.valid">Save</button>
        </div>

      </form>

      <div *ngIf="payLoad" class="form-row">
        <strong>Saved the following values</strong><br>{{payLoad}}
      </div>
    </div>
  `,
  styles: [],

})
export class DynamicFormComponent implements OnInit {


  form: FormGroup;
  payLoad = '';

  @Input() questions: QuestionBase<any>[] = [
    new DropdownQuestion({
      key: 'brave',
      nullable: true,
      label: 'Bravery Rating',
      options: [
        {key: 'solid2',  value: 'Solid2'},
        {key: 'great',  value: 'Great'},
        {key: 'good',   value: 'Good'},
        {key: 'unproven', value: 'Unproven'}
      ],
      order: 3,
      value: null

    }),

    new TextboxQuestion({
      key: 'firstName',
      label: 'First name',
      value: '',
      required: true,
      order: 1
    }),

    new TextboxQuestion({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 2
    })
  ];



  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);

    // this.form.setValue({brave: 'solid2',firstName: 'Bombasto',emailAddress: 'qeqweqw@gggg.it'});
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
