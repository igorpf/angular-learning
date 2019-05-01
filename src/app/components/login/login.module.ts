import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from 'src/app/forms/login-form/login-form.component';
import { RegistrationFormComponent } from 'src/app/forms/registration-form/registration-form.component';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    LoginRoutingModule,
    TranslateModule
  ],
  exports: [
    RouterModule
  ]
})
export class LoginModule { }
