import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  readonly DEFAULT_LANG = 'en';

  constructor(
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute) { }

  getCurrentLocale() {
    return this.localStorageService.getItem('lang');
  }
}
