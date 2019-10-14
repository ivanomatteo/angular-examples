import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-form-control-errors',
  template: `
    <ul *ngIf="currErrors.length" [ngClass]="classes">
      <li *ngFor="let e of currErrors">
          {{e.msg}}
      </li>
    </ul>
  `,
  styles: []
})
export class FormControlErrorsComponent implements OnInit, OnDestroy, OnChanges {

  @Input() fControl: FormControl;
  @Input() errMsgs;
  @Input() idError = null;

  @Input('class') classes = 'text-danger';

  currErrors = [];
  displayMessages = {};


  private defaultMessages = {
    required: 'Il Campo è obbligatorio',
    email: 'l\'email inserita non è valida',
    pattern: 'Il campo non è valido',
  };

  private subscriptions: Subscription[] = [];

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.errMsgs) {
      this.updateMessages();
    }

  }

  ngOnInit() {

    this.updateMessages();
    this.currErrors = this.errorsToArray(this.idError);

    this.subscriptions.push(
      this.fControl.valueChanges.subscribe((v) => {
        this.currErrors = this.errorsToArray(this.idError);
      })
    );

  }


  ngOnDestroy() {
    // remove all subscriptions
    for (const s of this.subscriptions) {
      s.unsubscribe();
    }
  }


  updateMessages() {
    if (this.errMsgs) {
      this.displayMessages = Object.assign(this.defaultMessages, this.errMsgs);
    } else {
      this.displayMessages = Object.assign({}, this.defaultMessages);
    }
  }


  errorToMsg(e) {

    if (typeof e === 'string') {
      return this.displayMessages[e] || e;
    } else {
      return this.displayMessages[e.key] || e.key;
    }

  }

  errorsToArray(errid: string = null): any[] {

    const arr = [];
    const err = this.fControl.errors;
    if (!err) {
      return [];
    }

    if (errid) {
      return [{ key: errid, value: err[errid], msg: this.errorToMsg(err[errid]) }];
    }

    // tslint:disable-next-line: forin
    for (const k in err) {
      arr.push({ key: k, value: err[k], msg: this.errorToMsg({ key: k, value: err[k] }) });
    }

    return arr;
  }


}
