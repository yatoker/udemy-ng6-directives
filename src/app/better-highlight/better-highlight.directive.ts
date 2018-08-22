import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // Using @HostBinding is even the better way of manipulating the dom element for which directive is used.
  @HostBinding('style.color') foreColor: string = 'black';

  @Input('appBetterHighlight') defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { 

  }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue");

    this.renderer.setStyle(this.elRef.nativeElement, "background-color", this.defaultColor);
  }

  //When an element using this directive emits mouseenter event, @HostListener("mouseenter") will be informed about the event and run the code.
  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", this.highlightColor);

    this.foreColor = "white";
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", this.defaultColor);

    this.foreColor = "black";
  }
}
