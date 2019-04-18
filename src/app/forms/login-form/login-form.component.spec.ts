import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.submitted, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send login credentials on submit', () => {
    const expectedEmail = "test@example.com";
    const expectedPassword = "fake password";

    let element = fixture.nativeElement;
    element.querySelector('input[name=email]').value = expectedEmail;
    element.querySelector('input[name=email]').dispatchEvent(new Event('input'));
    element.querySelector('input[name=password]').value = expectedPassword;
    element.querySelector('input[name=password]').dispatchEvent(new Event('input'));

    fixture.detectChanges();

    component.submitted.subscribe(({ email, password }) => {
      expect(email).toEqual(expectedEmail);
      expect(password).toEqual(expectedPassword);
    });

    element.querySelector('button[type="submit"]').click();
    expect(component.submitted.emit).toHaveBeenCalled();
  });

  it('should not send login credentials on wrong email', () => {
    const expectedEmail = "not an email";
    const expectedPassword = "fake password";

    let element = fixture.nativeElement;
    element.querySelector('input[name=email]').value = expectedEmail;
    element.querySelector('input[name=email]').dispatchEvent(new Event('input'));
    element.querySelector('input[name=password]').value = expectedPassword;
    element.querySelector('input[name=password]').dispatchEvent(new Event('input'));

    fixture.detectChanges();

    element.querySelector('button[type="submit"]').click();
    expect(component.loginForm.valid).toBeFalsy();
    expect(component.submitted.emit).not.toHaveBeenCalled();
  });
});
