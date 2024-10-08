import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumerico]',
  standalone: true
})
export class Numerico {

  constructor() { }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
