import { TestBed } from '@angular/core/testing';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FakeBackendInterceptor, fakeBackendProvider } from './fake-backend.interceptor.spec';
import { TokenInterceptor, tokenInterceptorProvider } from './token.interceptor';
import { TokenService } from '../token/token.service';

class FakeTokenService {
  getAccessToken() {
    return 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3';
  }
}

describe('TokenInterceptor', () => {
  let http: HttpClient;
  let interceptor: TokenInterceptor;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {provide: TokenService, useFactory: () => new FakeTokenService()},
        TokenInterceptor,
        tokenInterceptorProvider,
        fakeBackendProvider
      ]
    });

    http = TestBed.get(HttpClient);
    interceptor = TestBed.get(TokenInterceptor);
  });

  it('should be created', async () => {
    expect(interceptor).toBeTruthy();
  });

  it('should get a response correctly', async () => {
    const response: any = await http.get('/test').toPromise();
    expect(response).toBeTruthy();
    expect(response.username).toBe('test');
  });
});
