import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormComponent } from './registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from 'src/app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { updateInputDispatchingEvent } from 'src/app/forms/input.spec';

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
        BrowserAnimationsModule,
        TranslateModule.forRoot()
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
    const expectedEmail = 'test@example.com';
    const expectedPassword = 'fake password';
    const expectedCpf = '26527496095';

    const element = fixture.nativeElement;
    updateInputDispatchingEvent(element.querySelector('input[name=email]'), expectedEmail);
    updateInputDispatchingEvent(element.querySelector('input[name=password]'), expectedPassword);
    updateInputDispatchingEvent(element.querySelector('input[name=passwordConfirmation]'), expectedPassword);
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
    const expectedEmail = 'not an email';
    const expectedPassword = 'fake password';
    const expectedCpf = '26527496095';

    const element = fixture.nativeElement;
    updateInputDispatchingEvent(element.querySelector('input[name=email]'), expectedEmail);
    updateInputDispatchingEvent(element.querySelector('input[name=password]'), expectedPassword);
    updateInputDispatchingEvent(element.querySelector('input[name=passwordConfirmation]'), expectedPassword);
    updateInputDispatchingEvent(element.querySelector('input[name=cpf]'), expectedCpf);

    fixture.detectChanges();

    element.querySelector('button[type="submit"]').click();
    expect(component.registrationForm.valid).toBeFalsy();
    expect(component.submitted.emit).not.toHaveBeenCalled();
  });

  it('should not send registration credentials on different passwords', () => {
    const expectedEmail = 'test@example.com';
    const expectedPassword = 'fake password';
    const expectedCpf = '26527496095';

    const element = fixture.nativeElement;
    updateInputDispatchingEvent(element.querySelector('input[name=email]'), expectedEmail);
    updateInputDispatchingEvent(element.querySelector('input[name=password]'), expectedPassword);
    updateInputDispatchingEvent(element.querySelector('input[name=passwordConfirmation]'), 'another password');
    updateInputDispatchingEvent(element.querySelector('input[name=cpf]'), expectedCpf);

    fixture.detectChanges();

    element.querySelector('button[type="submit"]').disabled = false;
    element.querySelector('button[type="submit"]').click();
    expect(component.registrationForm.valid).toBeFalsy();
    expect(component.submitted.emit).not.toHaveBeenCalled();
  });
});