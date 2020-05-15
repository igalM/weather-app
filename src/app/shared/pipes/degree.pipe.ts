import { Pipe, PipeTransform } from '@angular/core';
import { GlobalVars } from '../vars/global.vars';

@Pipe({ name: 'degreePipe', pure: false })
export class DegreePipe implements PipeTransform {

    public celsius: string = '°C';
    public fahrenheit: string = '°F';
    constructor(
        private readonly gVars: GlobalVars
    ) {

    }
    transform(value: number): string {
        let newValue: number = 0;
        if (this.gVars.isCelsius) {
            return `${value}${this.fahrenheit}`;
        } else {
            newValue = (value - 32) * 5 / 9;
            return `${newValue.toFixed(0)}${this.celsius}`;
        }
    }
}