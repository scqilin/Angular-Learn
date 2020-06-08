import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberadd'
})
export class NumberaddPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value + 1;
  }

}
