import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {[key: string]: any} = {}) {
    super(options);
    this.type = options.type || '';
  }
}
