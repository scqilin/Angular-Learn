import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'baybay'
})
export class BaybayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
