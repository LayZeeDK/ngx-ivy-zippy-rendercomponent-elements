import { ɵdetectChanges, ɵrenderComponent } from '@angular/core';

import { ZippyComponent } from './zippy.component';

export class ZippyElement extends HTMLElement {
  static get observedAttributes() {
    return ['label'] as Array<keyof ZippyComponent>;
  }

  private component: ZippyComponent;

  constructor() {
    super();

    const host = document.createElement('zippy-component');

    this.component = ɵrenderComponent(ZippyComponent, { host: host });

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(host);
  }

  attributeChangedCallback(name: keyof ZippyComponent, oldValue: any, newValue: any) {
    switch (name) {
      case 'label':
        this.label = newValue;
        
        break;
    }
  }

  get label(): string {
    return this.component.label;
  }
  set label(value: string) {
    this.component.label = value;
    ɵdetectChanges(this.component);
  }
}
