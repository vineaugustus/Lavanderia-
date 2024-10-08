import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data',
  standalone: true
})
export class DataPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    return value.toLocaleDateString();
  }
}
