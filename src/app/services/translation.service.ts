import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  readonly DEFAULT_LANG = 'en';

  constructor(
    private localStorageService: LocalStorageService) { }

  getCurrentLocale() {
    return this.localStorageService.getItem('lang');
  }
}
