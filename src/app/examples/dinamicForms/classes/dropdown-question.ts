import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {

  nullable: boolean;

  controlType = 'dropdown';

  options: {key: string, value: string}[] = [];

  constructor(options: {[key: string]: any} = {}) {
    super(options);
    this.options = options.options || [];
    this.nullable = options.nullable === undefined ? true : options.nullable;
  }
}
