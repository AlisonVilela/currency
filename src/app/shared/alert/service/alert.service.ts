import { Injectable } from '@angular/core';

import { Alert } from '../interface/alert';

@Injectable()
export class AlertService {
  alerts: any= [];
  constructor() { }

  getAlerts() {
    return this.alerts;
  }

  setAlert(alert) {
    this.alerts.push(alert);
  }

  setCloseAlert(alert: Alert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
