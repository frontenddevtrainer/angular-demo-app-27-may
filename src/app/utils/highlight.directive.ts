import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]', // .highlight [attr] #id elementname
})
export class HighlightDirective {
  element: any;

  @Input() highlight : string = "yellow";

  constructor(el: ElementRef) {
    this.element = el;
  }

  @HostListener('mouseover') mouseover() {
    this.element.nativeElement.style.backgroundColor = this.highlight;
  }

  @HostListener('mouseout') mouseout() {
    this.element.nativeElement.style.backgroundColor = 'white';
  }
}
