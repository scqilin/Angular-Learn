import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello'
})
export class HelloPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'Hello ' + value;
  }

}
