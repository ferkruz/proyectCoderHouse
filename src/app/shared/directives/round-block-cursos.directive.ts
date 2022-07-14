import { Directive, ElementRef, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appRoundBlockCursos]'
})
export class RoundBlockCursosDirective {
  constructor(renderer: Renderer2, elementRef: ElementRef) {
    renderer.setStyle(elementRef.nativeElement, 'border-radius', '12px');
    renderer.setStyle(elementRef.nativeElement, 'font-size', '20px');
  }

}
