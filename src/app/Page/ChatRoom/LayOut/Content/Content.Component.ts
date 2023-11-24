import { Component } from '@angular/core';

import { TokenService } from 'src/app/@Core/Service/Token.Service';

@Component({
  selector: 'ChatRoom-Content',
  templateUrl: './Content.Component.html',
  styleUrls: ['./Content.Component.scss']
})
export class ChatRoom_Content {

constructor(private TokenService:TokenService){

}

}
