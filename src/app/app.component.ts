import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './services/local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService,
    private localStorage: LocalStorageService,
    private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      const validLanguages = ['pt', 'en'];
      const requiredLanguage = params.get('lang') || this.localStorage.getItem('lang') || 'en';
      const usedLanguage = validLanguages.some(l => l === requiredLanguage) ? requiredLanguage : 'en';

      localStorage.setItem('lang', usedLanguage);
      this.translate.setDefaultLang(usedLanguage);
    });
  }

  title = 'angular-first-steps';

  menuOptions: Resource[] = [
    {routerLink: '/login', icon: 'input', name: 'login', class: 'login-button', key: 'login'},
    {routerLink: '/register', icon: 'input', name: 'register', class: '', key: 'register'},
    {routerLink: '/', icon: 'home', name: 'home', class: '', key: 'home'}
  ];

}

interface Resource {
  routerLink: String;
  icon: String;
  name: String;
  class: String;
  key: String;
}
