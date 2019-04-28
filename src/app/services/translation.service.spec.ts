import { TranslationService } from './translation.service';
import { LocalStorageService } from './local-storage.service';

describe('TranslationService', () => {
  let service: TranslationService;
  let localStorageService: LocalStorageService;
  beforeEach(() => {
    localStorageService = new LocalStorageService(null);
    service = new TranslationService(localStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have en locale', () => {
    const lang = 'en';
    spyOn(localStorageService, 'getItem').and.returnValue(lang);
    expect(service.getCurrentLocale()).toBe(lang);
  });
});
