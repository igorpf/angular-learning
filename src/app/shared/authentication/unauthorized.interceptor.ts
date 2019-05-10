import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenService } from '../token/token.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService, 
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.tokenService.destroyToken();
        this.router.navigate(['/login']);
      }

      const error = err.error.message;
      return throwError(error);
    }))
  }
}

export let unauthorizedInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: UnauthorizedInterceptor,
  multi: true
};
