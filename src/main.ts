import { enableProdMode } from '@angular/core';

import { ZippyElement } from './app/zippy.element';

enableProdMode();

customElements.define('zippy-element', ZippyElement);
