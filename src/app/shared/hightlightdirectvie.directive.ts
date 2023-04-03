import { Directive, ElementRef , HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightlightdirectvie]'
})
export class HightlightdirectvieDirective implements OnInit{

  constructor(private elementRef: ElementRef,private renderer: Renderer2) { }


  @Input() defaultColor = 'transparent';
  @Input() highLight = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor:string | undefined;

  ngOnInit(): void {
    this.backgroundColor =this.defaultColor;

  }


  @HostListener('mouseenter') mouserover(eventData:Event){

    this.backgroundColor=this.highLight;
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue')
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor=this.defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red')
  }

}
