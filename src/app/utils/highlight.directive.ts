import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]', // .highlight [attr] #id elementname
})
export class HighlightDirective {
  element: any;

  constructor(el: ElementRef) {
    this.element = el;
  }

  @HostListener('mouseover') mouseover() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseout') mouseout() {
    this.element.nativeElement.style.backgroundColor = 'white';
  }
}
