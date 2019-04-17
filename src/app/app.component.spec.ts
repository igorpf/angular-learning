import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        FlexLayoutModule,
        NoopAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
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
