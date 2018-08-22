import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue");
  }

  //When an element using this directive emits mouseenter event, @HostListener("mouseenter") will be informed about the event and run the code.
  @HostListener("mouseenter") mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue");
  }
  
  @HostListener("mouseleave") mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent");
  }
}
