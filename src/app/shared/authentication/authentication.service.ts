import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppConfig, APP_CONFIG } from 'src/app/app.config';
import { TokenService, AccessToken } from '../token/token.service';

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig,
    private tokenService: TokenService) { }

  async login(params: LoginParameters) {
    return this.http.post<AccessToken>(this.config.apiEndpoint + '/oauth/token', {
        'grant-type': 'password',
        'username': params.username,
        'password': params.password,
        'client_id': 'dummy-client-id',
        'client_secret': 'dummy-client-secret'
      }).toPromise()
      .then((response) => this.tokenService.saveToken(response))
      .catch(() => this.tokenService.destroyToken());
  }

  async isUserLoggedIn () {
    return new Promise((resolve) => {
      resolve(this.tokenService.hasValidLogin());
    });
  }

  async logout() {
    return new Promise((resolve) => {
      this.tokenService.destroyToken();
      resolve();
    });
    
  }
}

interface LoginParameters {
  username: String;
  password: String;
}