import { AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class MyValidatorsAsync {

  static contains(str: string): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return new Observable(obs => {

        setTimeout(() => {
          if (control.value && typeof control.value === 'string' && control.value.indexOf(str) !== -1) {
            obs.next(null);
          } else {
            obs.next({ containsAsync: true });
          }
          obs.complete();
        }, 2000);


      });
    };
  }

  static get isHello(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return new Observable(obs => {


        setTimeout(() => {
          if (control.value === 'hello') {
            obs.next(null); // ok
          } else {
            obs.next({ isHelloAsync: true }); // Error
          }
          obs.complete();
        }, 2000);


      });
    };
  }

}
