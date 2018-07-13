import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor() {
    document.getElementById("b").style.color="yellow";
    document.getElementById("b").style.fontStyle="italic"
    document.getElementById("b").style.fontSize="4em"
  }

}
