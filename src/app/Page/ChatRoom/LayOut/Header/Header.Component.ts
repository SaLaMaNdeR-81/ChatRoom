import { Component } from '@angular/core';

import { TokenService } from 'src/app/@Core/Service/Token.Service';

@Component({
  selector: 'ChatRoom-Header',
  templateUrl: './Header.Component.html',
  styleUrls: ['./Header.Component.scss']
})
export class ChatRoom_Header {

Token : any = null;
UID : string = "" ;
Username : string = "" ;

constructor(private TokenService:TokenService){

  this.CheckToken()

}

// ===================================

CheckToken(){

  this.Token = this.TokenService.CheckToken()
  this.Token = JSON.parse(this.Token)

  this.UID = this.Token.UID
  this.Username = this.Token.Username
  
}

onLogOut(){

  this.TokenService.RemoveToken()
  document.location.reload()

}

// ===================================

}
