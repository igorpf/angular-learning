import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { windowFactory, localStorageFactory } from './bootstrap';
import { TranslationService } from './services/translation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useFactory: (translationService: TranslationService) => translationService.getCurrentLocale(), deps: [TranslationService] },
    { provide: 'window', useFactory: windowFactory },
    { provide: 'localStorage', useFactory: localStorageFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
