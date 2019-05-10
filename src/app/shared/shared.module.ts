import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { windowFactory, localStorageFactory } from '../bootstrap';
import { LocalStorageService } from './local-storage/local-storage.service';
import { AuthenticationService } from './authentication/authentication.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TokenInterceptor, tokenInterceptorProvider } from './authentication/token.interceptor';
import { TokenService } from './token/token.service';
import { fakeBackendProvider } from './authentication/fake-backend.interceptor.spec';
import { unauthorizedInterceptorProvider } from './authentication/unauthorized.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: 'window', useFactory: windowFactory },
    { provide: 'localStorage', useFactory: localStorageFactory },
    LocalStorageService,
    TokenService,
    tokenInterceptorProvider,
    unauthorizedInterceptorProvider,
    fakeBackendProvider,
    AuthenticationService
  ]
})
export class SharedModule { }