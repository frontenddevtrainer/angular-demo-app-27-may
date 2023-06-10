import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective implements OnInit {

  element!: ElementRef;


  constructor(el: ElementRef) {

    this.element = el;

    el.nativeElement.style.color = "blue";
  }

  ngOnInit(): void {
    console.log(this.element);
  }

}
