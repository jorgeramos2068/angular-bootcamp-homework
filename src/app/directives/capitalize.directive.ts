import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]',
})
export class CapitalizeDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.capitalize();
  }

  public capitalize(): void {
    if (typeof this.el.nativeElement.innerText === 'string') {
      this.el.nativeElement.innerText = `${this.el.nativeElement.innerText
        .substring(0, 1)
        .toUpperCase()}${this.el.nativeElement.innerText
        .substring(1)
        .toLowerCase()}`;
    }
  }
}
