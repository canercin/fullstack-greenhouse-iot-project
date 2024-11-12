import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  private alertify: any;

  constructor() {
    this.alertify = (window as any).alertify;
  }

  success(message: string) {
    this.alertify.success(message);
  }

  error(message: string) {
    this.alertify.error(message);
  }
}
