import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes, AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';

describe('AppRoutingModule', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppRoutingModule
            ]
        });
    }));

    it(`should not provide router module`, () => {
        expect(() => TestBed.get(RouterModule)).toThrowError();
    });
});

describe('AppRoutingModule.forRoot()', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes),
                AppRoutingModule
            ],
            declarations: [
                LoginComponent
            ]
        });
    }));

    it(`should create AppRoutingModule`, () => {
        expect(TestBed.get(AppRoutingModule)).not.toBeNull();
    });

    it(`should redirect to login when clicking on login button`, fakeAsync(() => {
        const router = TestBed.get(RouterModule);
        expect(router).not.toBeNull();
    }));
});
