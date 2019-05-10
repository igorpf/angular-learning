import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from 'src/app/components/login/login-form/login-form.component';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { APP_CONFIG, AppConfig } from 'src/app/app.config';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    LoginRoutingModule,
    TranslateModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig }
  ]
})
export class LoginModule { }
