import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './components/login/login.module';

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
        LoginModule
      ],
      declarations: [
        AppComponent
      ],
      providers: []
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
});
