import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoObrigatorio]',
  standalone: true
})
export class CampoObrigatorio {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const value = this.el.nativeElement.value;
    if (!value) {
      this.el.nativeElement.style.borderColor = 'red';
    } else {
      this.el.nativeElement.style.borderColor = '';
    }
  }
}
