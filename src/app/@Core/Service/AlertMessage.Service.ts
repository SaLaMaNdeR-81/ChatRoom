import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable } from 'rxjs';

export enum AlertType {
  Success = 'Success',
  Warning = 'Warning',
  Error = 'Error'
}

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  
  private AlertMessagesSubject = new BehaviorSubject< any[] > ([]);
  public AlertMessages = this.AlertMessagesSubject.asObservable();
  
  constructor() {

  }
  
  public AddAlert(Type : AlertType , Message : string) {

    const alert = {
      type : Type,
      message : Message       
    } 

    const CurrentAlerts = this.AlertMessagesSubject.getValue();
    const updatedAlerts = [...CurrentAlerts, alert];
    this.AlertMessagesSubject.next(updatedAlerts);
    if (CurrentAlerts.length > 4) {
      CurrentAlerts.shift();
      this.AlertMessagesSubject.next(CurrentAlerts);
    }

  }

  public removeLastAlert() {
    const CurrentAlerts = this.AlertMessagesSubject.getValue();

    if (CurrentAlerts.length > 0) {
      CurrentAlerts.shift();
      this.AlertMessagesSubject.next(CurrentAlerts);
    }

  }

}
