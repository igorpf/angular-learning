import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { routes } from './routing/app-routing.module';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationFormComponent } from './forms/registration-form/registration-form.component';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MaterialModule,
        FlexLayoutModule,
        NoopAnimationsModule,
        NgxMaskModule.forRoot(),
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        RegistrationFormComponent
      ],
      providers: []
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
      router = TestBed.get(Router);
      fixture.ngZone.run(() => {
        router.initialNavigation();
      });
    });
  }));


  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-first-steps'`, () => {
    expect(app.title).toEqual('angular-first-steps');
  });
});
