import { TestBed } from '@angular/core/testing';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FakeBackendInterceptor, fakeBackendProvider } from './fake-backend.interceptor.spec';
import { UnauthorizedInterceptor, unauthorizedInterceptorProvider } from './unauthorized.interceptor';
import { TokenService } from '../token/token.service';
import { Router } from '@angular/router';

class FakeTokenService {
  destroyToken() {}
}



describe('TokenInterceptor', () => {
  let http: HttpClient;
  let router;
  beforeEach(() => {
    router = {
      navigate: jasmine.createSpy('navigate')
    }

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule        
      ],
      providers: [
        {provide: TokenService, useFactory: () => new FakeTokenService()},
        {provide: Router, useValue: router},
        unauthorizedInterceptorProvider,
        fakeBackendProvider
      ]
    });

    http = TestBed.get(HttpClient);
  });


  it('should redirect to login on an unauthorized request', async () => {
    try {
      await http.get('/test').toPromise();
      fail();
    } catch (e) {
      expect(router.navigate).toHaveBeenCalledWith(['/login']);
    }
  });

  it('should not redirect to login on an ok request', async () => {
    await http.get('/noauth').toPromise();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
