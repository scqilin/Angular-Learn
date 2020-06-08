import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        return 'Welcome to ' + value;
    }

}
