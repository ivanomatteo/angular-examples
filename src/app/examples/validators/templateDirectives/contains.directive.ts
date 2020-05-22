import { Directive, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { MyValidators } from '../my-validators';


@Directive({
  selector: '[contains]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ContainsDirective, multi: true }]
})
export class ContainsDirective implements Validator {

  constructor(
    @Attribute('contains') public str: string, // get the value of attribute "contains"
  ) {

  }

  get validate() { return MyValidators.contains(this.str); }

}
