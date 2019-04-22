import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { storage } from 'test/polyfill/localStorage';

describe('LocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: 'localStorage', useValue: storage() }
    ]
  }));

  it('should be created', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    expect(service).toBeTruthy();
  });

  it('should save correctly a value', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);

    const key = 'key';
    const value = { '1': '13' };

    service.setItem(key, value);
    expect(service.getItem(key)).toBe(value);
  });

  it('should save remove a value', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);

    const key = 'key';
    const value = { '1': '13' };

    service.setItem(key, value);
    service.removeItem(key);

    expect(service.getItem(key)).toBeNull();
  });
});
