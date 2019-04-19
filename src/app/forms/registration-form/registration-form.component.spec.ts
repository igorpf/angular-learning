import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormComponent } from './registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFormComponent],
      imports: [
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.submitted, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send registration credentials on submit', () => {
    const expectedEmail = "test@example.com";
    const expectedPassword = "fake password";
    const expectedCpf = "26527496095";

    let element = fixture.nativeElement;
    element.querySelector('input[name=email]').value = expectedEmail;
    element.querySelector('input[name=email]').dispatchEvent(new Event('input'));
    element.querySelector('input[name=password]').value = expectedPassword;
    element.querySelector('input[name=password]').dispatchEvent(new Event('input'));
    element.querySelector('input[name=password-confirmation]').value = expectedPassword;
    element.querySelector('input[name=password-confirmation]').dispatchEvent(new Event('input'));
    element.querySelector('input[name=cpf]').value = expectedCpf;
    element.querySelector('input[name=cpf]').dispatchEvent(new Event('input'));

    fixture.detectChanges();

    component.submitted.subscribe(({ email, cpf, password, passwordConfirmation }) => {
      expect(email).toEqual(expectedEmail);
      expect(password).toEqual(expectedPassword);
      expect(passwordConfirmation).toEqual(expectedPassword);
      expect(cpf).toEqual(expectedCpf);
    });

    element.querySelector('button[type="submit"]').click();
    expect(component.registrationForm.valid).toBeTruthy();
    expect(component.submitted.emit).toHaveBeenCalled();
  });

  it('should not send Registration credentials on wrong email', () => {
    const expectedEmail = "not an email";
    const expectedPassword = "fake password";

    let element = fixture.nativeElement;
    element.querySelector('input[name=email]').value = expectedEmail;
    element.querySelector('input[name=email]').dispatchEvent(new Event('input'));
    element.querySelector('input[name=password]').value = expectedPassword;
    element.querySelector('input[name=password]').dispatchEvent(new Event('input'));

    fixture.detectChanges();

    element.querySelector('button[type="submit"]').click();
    expect(component.registrationForm.valid).toBeFalsy();
    expect(component.submitted.emit).not.toHaveBeenCalled();
  });
});
