import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  loginForm: FormGroup;

  @Input()
  email: string;

  @Output()
  submitted = new EventEmitter();

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit({ email, password }) {
    if (this.loginForm.valid) {
      this.submitted.emit({ email, password });
    }
  }

}
