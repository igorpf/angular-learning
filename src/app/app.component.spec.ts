import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './components/login/login.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { localStorageFactory } from './bootstrap';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MaterialModule,
        FlexLayoutModule,
        NoopAnimationsModule,
        NgxMaskModule.forRoot(),
        ReactiveFormsModule,
        LoginModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: 'localStorage', useFactory: localStorageFactory }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
    });
  }));


  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-first-steps'`, () => {
    expect(app.title).toEqual('angular-first-steps');
  });

  it(`should default to english language when an invalid language is selected`,
    inject([TranslateService, ActivatedRoute, LocalStorageService],
          (translate: TranslateService, route, localStorage: LocalStorageService) => {
      localStorage.setItem('lang', 'some invalid language');
      const appComponent = new AppComponent(translate, localStorage, route);
      expect(translate.getBrowserLang()).toEqual('en');
  }));
});
