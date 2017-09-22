import { Directive, HostListener, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appName]'
})
export class NameDirective implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('mouseover')
  onMouseEnter = (): void => {
    this.el.nativeElement.classList.add('name-post');
  };

  @HostListener('mouseleave')
  onMouseExit = (): void => {
    this.el.nativeElement.classList.remove('name-post');
  };
}
