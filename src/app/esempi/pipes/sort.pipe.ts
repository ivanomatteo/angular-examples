import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], args: any): any {
    if (!value || !value.length) {
      return value;
    }

    return value.sort((a, b) => {
      if (a[args.key] < b[args.key]) {
        return -1;
      }
      if (a[args.key] > b[args.key]) {
        return 1;
      }
      return 0;
    });

  }

}
