import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { getStorage } from 'test/polyfill/localStorage';

describe('TokenService', () => {
  let service: TokenService;
  let localStorage: LocalStorageService;
  let token;
  beforeEach(() => {
    localStorage = new LocalStorageService(getStorage());
    service = new TokenService(localStorage);
    token = {
      "access_token":"MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
      "token_type":"bearer",
      "expires_in":3600,
      "refresh_token":"IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk",
      "scope":"create"
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save token on login', async () => {
    expect(service.hasValidLogin()).toBeFalsy();
    await service.saveToken(token);
    expect(service.hasValidLogin()).toBeTruthy();
    expect(service.getAccessToken()).toBeTruthy();
  });

  it('should logout correctly', async () => {
    expect(service.hasValidLogin()).toBeFalsy();
    await service.saveToken(token);
    expect(service.hasValidLogin()).toBeTruthy();
    await service.destroyToken();
    expect(service.hasValidLogin()).toBeFalsy();
  });

  it('should not have a valid token since it\'s expired', async () => {
    expect(service.hasValidLogin()).toBeFalsy();
    token.expires_in = 0;
    await service.saveToken(token);
    expect(service.hasValidLogin()).toBeFalsy();
  });
});
