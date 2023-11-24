import { Component } from '@angular/core';

import { TokenService } from 'src/app/@Core/Service/Token.Service';
import { AlertMessageService , AlertType } from 'src/app/@Core/Service/AlertMessage.Service';

@Component({
  selector: 'Component-Auth',
  templateUrl: './Auth.Component.html',
  styleUrls: ['./Auth.Component.scss']
})
export class ComponentAuth {

  Username : string = "" ;

  constructor(private TokenService:TokenService , private AlertMessageService:AlertMessageService){
    
  }

  // ========================

  GenarateID(){
    return Math.floor( Math.random() * 10000 )
  }
  
  onSubmit(){

    if (this.Username.length === 0) {
      return this.AlertMessageService.AddAlert(AlertType.Warning, 'Please Enter a Username.');
    }

    if (this.Username.length < 3) {
      return this.AlertMessageService.AddAlert(AlertType.Warning, 'Username must be at least 3 characters');
    }

    if (this.Username.length > 16) {
      return this.AlertMessageService.AddAlert(AlertType.Warning, 'Username cannot exceed 16 characters');
    }
    
    const data = {
      UID : this.GenarateID(),
      Username : this.Username ,
    }
    
    this.TokenService.SetAdvancedToken(JSON.stringify(data))
    this.AlertMessageService.AddAlert(AlertType.Success, 'Username cannot exceed 16 characters');
    return location.reload()
    
  }
  
  // ========================

}
