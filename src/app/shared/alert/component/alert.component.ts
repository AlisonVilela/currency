import { AlertService } from './../service/alert.service';
import { Component, Input, OnInit } from '@angular/core';

import { Alert } from '../interface/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input()
  public alerts: Array<Alert> = [];

  constructor(private _alertService: AlertService) { }

  ngOnInit() {
    this.alerts = this._alertService.getAlerts();
  }

  public closeAlert(alert: Alert) {
    this._alertService.setCloseAlert(alert);
  }

}
