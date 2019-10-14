import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({

  selector: 'app-form-reactive',

  template: `

  <div class="mt-5">
  <div class="form-group">
    <label>
        Single FormControl:
    </label>
    <input type="text" [formControl]="single">
  </div>
  <button  class="btn btn-secondary" (click)="showSingle()" >mostra valore</button>


  <h3>FromGroup</h3>
  <div class="p-4 border">

  <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">

    <div class="form-group">
        <label>
          First Name:
        </label>
        <input type="text" formControlName="firstName">
        <div *ngIf="profileForm.controls['firstName'].errors?.required" class="text-danger">
          Il campo è obbligatorio
        </div>


    </div>
    <div class="form-group">
      <label>
        Last Name:
      </label>
      <input type="text" formControlName="lastName">
      <app-form-control-errors [fControl]="profileForm.controls['lastName']" [errMsgs]="{pattern:'è sbagliato'}"></app-form-control-errors>
    </div>
    <div class="form-group">
      <label>
        Email:
      </label>
      <input type="email" formControlName="email">
      <app-form-control-errors [fControl]="profileForm.controls['email']"></app-form-control-errors>
    </div>


    <div formGroupName="address">
          <h3>Address <small>(nested FromGroup)</small></h3>
          <div class="form-group">
            <label>
              Street:
            </label>
            <input type="text" formControlName="street">
          </div>
          <div class="form-group">
            <label>
              City:
            </label>
            <input type="text" formControlName="city">
          </div>
          <div class="form-group">
            <label>
              State:
            </label>
            <input type="text" formControlName="state">
          </div>
          <div class="form-group">
            <label>
              Zip Code:
            </label>
            <input type="text" formControlName="zip">
          </div>
    </div>

    <button type="submit" class="btn btn-secondary" [disabled]="!profileForm.valid">submit</button>
</form>
</div>

</div>
  `,
  styles: [`
    input.ng-invalid{
       border: 1px solid red;
    }
  `]
})
export class FormReactiveComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  single = new FormControl('');


  // standard syntax
  /*
      profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      })
    });

    */

  // builder syntax
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.pattern(/^[A-Z][a-zA-Z ]+[a-zA-Z]$/)], // espressione regolare https://regex101.com/

    email: ['', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.pattern(/^abc.*/),

        // custom validator as arrow function
        (c: FormControl) => {
          // return { condition_abc: true }; // single error
          // return { condition_abc: { aaa:'', bbb:123 } }; // single error with more infomation
          // return { condition_abc: true, condition_efg: true }; // multiple error

          // return; // or null | undefined = no error
          // no return = no error
        }
      ],

      // updateOn: 'change' || 'blur' || 'submit'
    }
    ],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });





  ngOnInit() {


  }




  showSingle() {
    console.log('this.single.value: ', this.single.value);
  }
  onSubmit() {

    console.log('this.profileForm.value: ', this.profileForm.value);
  }

}
