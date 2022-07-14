import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltarCursos]'
})
export class ResaltarCursosDirective {
  constructor(private el : ElementRef) {  }

  @HostListener('mouseenter') onMouseEnter() {
    this.resaltar('bold')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resaltar('')
  }

  private resaltar(color:string):void {
    this.el.nativeElement.style.fontWeight = color
  }
}
