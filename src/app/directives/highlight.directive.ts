import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) {
    // Thêm style
    this.elementRef.nativeElement.style.backgroundColor = 'red';
    // Thêm class
    this.elementRef.nativeElement.classList.add('w-25');

    // Cách lấy width và height của 1 element
    console.log(this.elementRef.nativeElement.clientWidth);
    console.log(this.elementRef.nativeElement.clientHeight);
  }

  @HostListener('click') handleClick() {
    this.elementRef.nativeElement.classList.remove('w-25');
    this.elementRef.nativeElement.classList.add('w-100');
  }

  @HostListener('mouseenter') handleMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
}
