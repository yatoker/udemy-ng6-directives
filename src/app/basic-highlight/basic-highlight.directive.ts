import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]' //Used to select this directive anywhere in the dom
})
export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}