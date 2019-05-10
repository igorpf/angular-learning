import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let testUser = { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' };
        let body = {
            "access_token": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
            "token_type": "bearer",
            "expires_in": 3600,
            "refresh_token": "IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk",
            "scope": "create"
        };

        return of(null).pipe(mergeMap(() => {

            if (request.url.endsWith('/oauth/token') && request.method === 'POST') {
                if (request.body.username === testUser.username && request.body.password === testUser.password) {
                    return of(new HttpResponse({ status: 200, body }));
                } else if (request.body.username === 'expired') {
                    body.expires_in = 0;
                    return of(new HttpResponse({ status: 200, body }));
                } {
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                }
            }

            if (request.url.endsWith('/test') && request.method === 'GET') {
                if (request.headers.get('Authorization') === `Bearer ${body.access_token}`) {
                    return of(new HttpResponse({ status: 200, body: testUser }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorized' } });
                }
            }

            if (request.url.endsWith('/noauth') && request.method === 'GET') {
                return of(new HttpResponse({ status: 200, body: {} }));
            }


            return of(new HttpResponse({ status: 400, body: [] }));
        }));
    }
}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};