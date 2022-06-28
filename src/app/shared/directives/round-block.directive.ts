  import { Directive, ElementRef, Renderer2 } from '@angular/core';

  @Directive({
    selector: '[appRoundBlock]',
  })
  export class RoundBlockDirective {
    constructor(renderer: Renderer2, elementRef: ElementRef) {
      renderer.setStyle(elementRef.nativeElement, 'border-radius', '12px');
      renderer.setStyle(elementRef.nativeElement, 'font-size', '20px');
    }
  }