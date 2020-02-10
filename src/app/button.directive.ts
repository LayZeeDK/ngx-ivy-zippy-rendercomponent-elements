import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[zippyButton]',
})
export class ButtonDirective {
  @Output()
  zippyClick = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    console.log('Click')
    this.zippyClick.emit();
  }
}
