import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[phone]',
  standalone: true
})
export class PhoneDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = this.el.nativeElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 11) {
      value = value.substring(0, 11);
    }

    if (value.length > 6) {
      input.value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 2) {
      input.value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      input.value = value.replace(/(\d*)/, '($1');
    }
  }

}
