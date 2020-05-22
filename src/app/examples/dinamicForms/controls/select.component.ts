import { Component, OnInit, Input } from '@angular/core';
import { DropdownQuestion } from '../classes/dropdown-question';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  template: `
        <select [id]="question.key"  [formControl]="fcontrol">
          <option
              *ngIf="question.nullable"
              [ngValue]="null" [selected]="question.value === null || question.value === undefined" >
              ---
          </option>
          <option *ngFor="let opt of question.options"
              [ngValue]="opt.key" [selected]="opt.key === question.value" >
              {{opt.value}}
          </option>
        </select>
  `,
  styles: []
})
export class SelectComponent implements OnInit {
  @Input() question: DropdownQuestion;
  @Input() fcontrol: FormControl ;

  constructor() { }

  ngOnInit() {
  }

}
