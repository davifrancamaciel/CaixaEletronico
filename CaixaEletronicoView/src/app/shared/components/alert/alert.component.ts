import { AlertService } from './alert.service';
import { Alert, AlertType } from './alert';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html'
})
export class AlertCoponent {

  @Input() timeout = 10000;

  alerts: Alert[] = [];

  constructor(
    private alertService: AlertService
  ) {
    alertService.getAlert()
      .subscribe(alert => {
        if (!alert) {
          this.alerts = [];
          return;
        }
        this.alerts.push(alert)
        setTimeout(() => this.removeAlert(alert), this.timeout);
      });
  }
  removeAlert(alertToRemove: Alert) {
    this.alerts = this.alerts.filter(alert => alert != alertToRemove);
  }

  getAlertClass(alert: Alert) {
    if (!alert) return '';

    switch (alert.aletType) {
      case AlertType.DANGER:
        return 'alert alert-danger';
      case AlertType.INFO:
        return 'alert alert-info';
      case AlertType.SUCCESS:
        return 'alert alert-success';
      case AlertType.WARNING:
        return 'alert alert-warning';
    }
  }

}
