import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';
import { MyValidators } from '../my-validators';


@Directive({
  selector: '[isHello]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IsHelloDirective, multi: true }]
})
export class IsHelloDirective implements Validator {

  get validate() {return  MyValidators.isHello; }

}
