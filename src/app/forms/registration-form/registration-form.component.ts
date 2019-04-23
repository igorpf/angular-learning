import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cpfValidator } from 'src/app/validators/cpf-validator';
import { cpfMask } from '../mask';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registrationForm: FormGroup;

  cpfMask: string = cpfMask;

  @Input()
  email: string;

  @Output()
  submitted = new EventEmitter();

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      cpf: ['', [Validators.required, cpfValidator()]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      'password-confirmation': ['', [Validators.required]]
    }, {
      validator: this.passwordsMatch
    });
  }

  onSubmit({ email, cpf, password, passwordConfirmation }) {
    if (this.registrationForm.valid) {
      this.submitted.emit({ email, cpf, password, passwordConfirmation });
    }
  }

  private passwordsMatch(group: FormGroup) {
    return group.controls.password.value === group.controls['password-confirmation'].value ? null : {match: false};
  }

}
