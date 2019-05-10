import { Injectable, Inject } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor(@Inject('localStorage') private localStorage) { }

  setItem(key: string, value: any): void {
    this.localStorage.setItem(key, value);
  }

  getItem(key: string): any {
    return this.localStorage.getItem(key);
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }

}
