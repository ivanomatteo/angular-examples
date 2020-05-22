import { AbstractControl, ValidationErrors } from '@angular/forms';

export class MyValidators {


  static get isHello() {
    return (control: AbstractControl): ValidationErrors => {

      if (control.value === 'hello') {
        return null; // ok
      } else {
        return { isHello: true }; // error
      }
    };
  }


  static contains(str: string) {
    return (control: AbstractControl): ValidationErrors => {
      if (control.value && typeof control.value === 'string' && control.value.indexOf(str) !== -1) {
        return null; // ok
      } else {
        return { contains: true }; // error
      }
    };
  }

}
