import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { loadTranslationFile } from './app/bootstrap';

if (environment.production) {
  enableProdMode();
}

declare const require;
platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: TRANSLATIONS, useFactory: loadTranslationFile, deps: [] },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
  ]
})
  .catch(err => console.error(err));