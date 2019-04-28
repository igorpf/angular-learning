import { LocalStorageService } from './local-storage.service';
import { getStorage } from 'test/polyfill/localStorage';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  beforeEach(() => {
    service = new LocalStorageService(getStorage());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save correctly a value', () => {
    const key = 'key';
    const value = { 1: '13' };

    service.setItem(key, value);
    expect(service.getItem(key)).toBe(value);
  });

  it('should save remove a value', () => {
    const key = 'key';
    const value = { 1: '13' };

    service.setItem(key, value);
    service.removeItem(key);

    expect(service.getItem(key)).toBeNull();
  });
});
