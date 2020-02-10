import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation,
  ɵdetectChanges,
} from '@angular/core';

import { ButtonDirective } from './button.directive';
import { CapitalizePipe } from './capitalize.pipe';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'zippy-element',
  template: `
    <button zippyButton (zippyClick)="onToggle()">
      {{label | capitalize}}
    </button>

    <div [hidden]="!isExpanded">
      <slot></slot>
    </div>
  `,
})
export class ZippyComponent {
  @Input()
  label = 'toggle';

  isExpanded = false;

  onToggle() {
    this.isExpanded = !this.isExpanded;
    ɵdetectChanges(this);
  }
}

@NgModule({
  declarations: [
    ZippyComponent,
    ButtonDirective,
    CapitalizePipe,
  ],
})
class ZippyRenderModule {}
