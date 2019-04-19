import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormComponent } from './registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { updateInputDispatchingEvent } from '../input.spec';
import { MaterialModule } from 'src/app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFormComponent],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        NgxMaskModule.forRoot(),
        BrowserAnimationsModule
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
    updateInputDispatchingEvent(element.querySelector('input[name=email]'), expectedEmail);
    updateInputDispatchingEvent(element.querySelector('input[name=password]'), expectedPassword);
    updateInputDispatchingEvent(element.querySelector('input[name=password-confirmation]'), expectedPassword);
    updateInputDispatchingEvent(element.querySelector('input[name=cpf]'), expectedCpf);

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

  it('should not send registration credentials on wrong email', () => {
    const expectedEmail = "not an email";
    const expectedPassword = "fake password";
    const expectedCpf = "26527496095";

    let element = fixture.nativeElement;
    updateInputDispatchingEvent(element.querySelector('input[name=email]'), expectedEmail);
    updateInputDispatchingEvent(element.querySelector('input[name=password]'), expectedPassword);
    updateInputDispatchingEvent(element.querySelector('input[name=password-confirmation]'), expectedPassword);
    updateInputDispatchingEvent(element.querySelector('input[name=cpf]'), expectedCpf);

    fixture.detectChanges();

    element.querySelector('button[type="submit"]').click();
    expect(component.registrationForm.valid).toBeFalsy();
    expect(component.submitted.emit).not.toHaveBeenCalled();
  });
});
