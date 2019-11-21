import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appMoneyMask]',
})
export class MoneyMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event);
  }
  onInputChange(event) {

    if (event) {
      let newVal = event.replace(/\D/g, '');
      console.log(newVal)
      this.ngControl.valueAccessor.writeValue(newVal);
    }
  }
}
