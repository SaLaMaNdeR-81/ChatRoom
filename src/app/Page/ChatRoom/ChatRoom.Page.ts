import { Component } from '@angular/core';

import { TokenService } from 'src/app/@Core/Service/Token.Service';

@Component({
  selector: 'Page-ChatRoom',
  templateUrl: './ChatRoom.Page.html',
  styleUrls: ['./ChatRoom.Page.scss']
})
export class PageChatRoom {

constructor(private TokenService:TokenService){

}

}
