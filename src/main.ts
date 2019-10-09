import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// ------ enable bootstrap and jquery in legacy mode ------

import * as $ from 'jquery';
import * as Popper from 'popper.js';
import 'bootstrap';
window['$'] = $;
window['jQuery'] = $;

document.addEventListener('DOMContentLoaded', (event) => {
  // tooltip() function is not declarated in @types/jquery, so we have to cast it to any
  ($('[data-toggle="tooltip"]') as any).tooltip();
});
// ------ enable bootstrap and jquery in legacy mode ------
