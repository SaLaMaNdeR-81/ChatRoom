import { Component , OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/@Core/Service/AlertMessage.Service';

@Component({
  selector: 'App-AlertMessage',
  templateUrl: './AlertMessage.component.html',
  styleUrls: ['./AlertMessage.component.scss']
})
export class AlertMessageComponent {
  Activity: boolean = false;

  constructor(public MessageService : AlertMessageService){

    // this.addNewAlert()
    this.removeLastAlert()

  }

  ngOnInit() {
    // If you have any initialization logic, you can place it here.
  }

  addNewAlert() {
    const newAlert ={message:"Login Successful",type:"Success"}
    // this.MessageService.AddAlert(newAlert.type,newAlert.message);
  }

  removeLastAlert() {
    setInterval(() => {
      this.MessageService.removeLastAlert();
    }, 5000);
  }

  // ===========================================

}
