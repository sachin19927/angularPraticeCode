import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStrcase]'
})
export class StrcaseDirective {


  @Input() set appStrcase(condition:boolean){
    if(!condition)
    {
      this.vcrf.createEmbeddedView(this.template);

    }
    else{
      this.vcrf.clear;
    }
  }
  constructor(private template:TemplateRef<any>,private vcrf : ViewContainerRef) { }


}
