import { InjectionToken } from "@angular/core";
import { environment } from 'src/environments/environment';

export let APP_CONFIG = new InjectionToken("app.config");

export interface IAppConfig {
    apiEndpoint: string;
}

export const AppConfig: IAppConfig = {    
    apiEndpoint: environment.apiEndpoint    
};