import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class TokenService {

  constructor(private localStorage: LocalStorageService) { }

  saveToken(response: AccessToken) {
    const expiration = response.expires_in * 1000;
    response.expires_at = new Date(new Date().getTime()+ expiration).getTime();
    this.localStorage.setItem('token', JSON.stringify(response));
  }

  destroyToken() {
    this.localStorage.removeItem('token');
  }

  private getToken() : AccessToken {
    const token = JSON.parse(this.localStorage.getItem('token'));
    return token;
  }

  private hasTokenExpired() {
    const token = this.getToken();
    return token? token.expires_at <= new Date().getTime() : true;
  }

  getAccessToken() {
    const token = this.getToken();
    return token && token.access_token;
  }

  hasValidLogin() {
    return !this.hasTokenExpired();
  }
}

export interface AccessToken {
  access_token: String;
  token_type: String;
  expires_in: number;
  expires_at?: number;
  refresh_token: String;
  scope: String;
}