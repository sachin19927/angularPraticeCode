import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAttributeHighlight]'
})
export class AttributeHighlightDirective {
 

  constructor(private elementRef: ElementRef,private renderer: Renderer2) { }


  @Input() defaultColor = 'transparent';
  @Input() highLight = 'lightgrey';

  @HostBinding('style.backgroundColor') backgroundColor:string | undefined;
  @HostBinding('style.textTransform') textTransform:string | undefined;
  //@HostBinding('style.dataToggle') dataToggle:string | undefined;

  
  @HostListener('mouseover') mouserover(eventData:Event){
    this.backgroundColor = this.highLight;
    this.textTransform = "uppercase";
    //this.dataToggle="dropdown"
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','lightgrey')
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor = this.defaultColor;
    this.textTransform = "lowercase";
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent')
  }
 
}
