import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moedaPipe',
  standalone: true
})
export class MoedaPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return 'R$' +' '+ value.toFixed(2);
  }
}
