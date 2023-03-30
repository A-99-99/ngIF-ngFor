import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: 'appBasicHighlight'
})

export class BasicHighlightDirective implements OnInit{
    constructor(private rend: Renderer2,  private elementRef: ElementRef){

        
    }
    ngOnInit(){

        this.rend.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');

    }
}