import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const reverseText = value.split("").reverse().join("")
    return reverseText.toUpperCase();
  }

}
