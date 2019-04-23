import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { getParameterByName, loadTranslationFile } from './app/bootstrap';
import { TranslationService } from './app/services/translation.service';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: TRANSLATIONS, useFactory: loadTranslationFile, deps: [] },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
  ]
});
