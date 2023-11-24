import { Component , OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { TokenService } from 'src/app/@Core/Service/Token.Service';
import { ChatMessageService } from 'src/app/@Core/Service/ChatMessage.Service';
import { TimeService } from 'src/app/@Core/Service/Time.Service';

@Component({
  selector: 'App-ChatMessages',
  templateUrl: './ChatMessage.Component.html',
  styleUrls: ['./ChatMessage.Component.scss']
})
export class ChatRoomMessageComponent {
  Token: any = ""
  Username: string = ""

  @ViewChild('Messages-Box') messagesBox!: ElementRef;

  constructor(private TokenService:TokenService ,public ChatMessageService : ChatMessageService ,public TimeService:TimeService){

    this.Token = this.TokenService.CheckToken()
    this.Token = JSON.parse(this.Token)
    this.Username = `${this.Token.Username}#${this.Token.UID}`

    this.SetScroll()

  }

  // =========================

  ngAfterViewInit() {
    this.SetScroll();
  }

  SetScroll() {
    if (this.messagesBox) {
      this.messagesBox.nativeElement.scrollTop = this.messagesBox.nativeElement.scrollHeight;
    }
  }

  // =========================

  // ===========================================

}
