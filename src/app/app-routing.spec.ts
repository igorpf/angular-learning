import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes, AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgxMaskModule } from 'ngx-mask';
import { LoginModule } from './components/login/login.module';

describe('AppRoutingModule.forRoot()', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes),
                AppRoutingModule,
                ReactiveFormsModule,
                MaterialModule,
                NgxMaskModule.forRoot(),
                LoginModule
            ]
        });
    }));

    it(`should create AppRoutingModule`, () => {
        expect(TestBed.get(AppRoutingModule)).not.toBeNull();
    });
});
