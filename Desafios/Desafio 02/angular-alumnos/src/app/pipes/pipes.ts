import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: any): any {
    return value.toUpperCase();
  }

}

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value: any): any {
    return new Number(value).toFixed(2);
  }

}
