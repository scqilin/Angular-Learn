import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'baybay1'
})
export class Baybay1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
