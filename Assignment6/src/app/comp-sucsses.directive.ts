import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core'
@Directive({
  selector: '[appCompSucsses]'
})
export class CompSucssesDirective {

e
  constructor(e:ElementRef) {
    this.e=e;
    //e.nativeElement.style.color="blue";
    //document.getElementById("d").style.color="red";   //second way
  }

 @HostListener('mouseover') onMouseOver() {
    this.e.nativeElement.style.color="blue";
  }

  @HostListener('mouseout') onMouseOut() {
    this.e.nativeElement.style.color="black";
  }
}
