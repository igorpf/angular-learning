import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes, AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegistrationFormComponent } from '../forms/registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { NgxMaskModule } from 'ngx-mask';

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
                AppRoutingModule,
                ReactiveFormsModule,
                MaterialModule,
                NgxMaskModule.forRoot()
            ],
            declarations: [
                LoginComponent,
                RegistrationFormComponent
            ]
        });
    }));

    it(`should create AppRoutingModule`, () => {
        expect(TestBed.get(AppRoutingModule)).not.toBeNull();
    });

    it(`should provide router module`, fakeAsync(() => {
        const router = TestBed.get(RouterModule);
        expect(router).not.toBeNull();
    }));
});
