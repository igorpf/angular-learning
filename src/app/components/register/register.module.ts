import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    RegisterComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    RegisterRoutingModule,
    TranslateModule
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterModule { }
