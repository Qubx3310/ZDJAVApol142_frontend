import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceValue',
  standalone: true
})
export class ReplaceValuePipe implements PipeTransform {

  transform(value : string) {
    console.log(value);
    return value.split('').reverse().join('');
  }

}
