import { AuthenticationService } from './authentication.service';
import { getStorage } from 'test/polyfill/localStorage';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IAppConfig } from 'src/app/app.config';
import { FakeBackendInterceptor } from './fake-backend.interceptor.spec';
import { TokenService } from '../token/token.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let localStorage: LocalStorageService;
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: FakeBackendInterceptor,
          multi: true
        }
      ]
    });

    let config : IAppConfig = {
      apiEndpoint: ''
    };
    http = TestBed.get(HttpClient);
    localStorage = new LocalStorageService(getStorage());
    service = new AuthenticationService(http, config, new TokenService(localStorage));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should do a successful login', async () => {
    await service.login({ username: 'test', password: 'test' })
    const loggedIn = await service.isUserLoggedIn();
    expect(loggedIn).toBeTruthy();
  });

  it('should do a successful logout', async () => {
    await service.login({ username: 'test', password: 'test' })
    await service.logout();
    const loggedIn = await service.isUserLoggedIn();
    expect(loggedIn).toBeFalsy();
  });

  it('should have an error trying to login', async () => {
    await service.login({ username: 'error', password: 'error' })
    const loggedIn = await service.isUserLoggedIn();
    expect(loggedIn).toBeFalsy();
  });

});
