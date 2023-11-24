import { Component ,ViewChild ,ElementRef ,AfterViewInit } from '@angular/core';

import { TokenService } from 'src/app/@Core/Service/Token.Service';
import { ChatMessageService } from 'src/app/@Core/Service/ChatMessage.Service';

import { ChatRoomMessageComponent } from 'src/app/Component/ChatMessage/ChatMessage.Component';

@Component({
  selector: 'ChatRoom-InputContainer',
  templateUrl: './InputContainer.Component.html',
  styleUrls: ['./InputContainer.Component.scss']
})
export class ChatRoom_InputContainer {
  // @ViewChild("MessageBox") ChatRoomMessageComponent: ChatRoomMessageComponent;
  
  TextArea: string =""
  Username: string = ""
  Token: any = ""
  
  @ViewChild('InputContainer-TextArea') Element_TextArea!:ElementRef;

  constructor(private TokenService:TokenService ,private ChatMessageService:ChatMessageService){

    this.Token = this.TokenService.CheckToken()
    this.Token = JSON.parse(this.Token)
    this.Username = `${this.Token.Username}#${this.Token.UID}`

  }

  onEnterKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.shiftKey ) {
      this.onSendMessage()
    }
    if (event.key === "Enter") {
      if (event.target instanceof HTMLTextAreaElement) {
        const myVariable: string = "\n";
        const cursorPosition: number = event.target.selectionStart;

        this.TextArea = this.TextArea.slice(0, cursorPosition) + myVariable + this.TextArea.slice(cursorPosition);
        // this.Element_TextArea.nativeElement.scrollTop = this.Element_TextArea.nativeElement.scrollHeight

        event.preventDefault();
      }
    }
  }

  SetScroll() {
    if (this.Element_TextArea) {
      this.Element_TextArea.nativeElement.scrollTop = -this.Element_TextArea.nativeElement.scrollHeight;
    }
  }

  handlePaste(event: any): void {
    event.preventDefault();

    // Get the pasted text
    const pastedText = event.clipboardData.getData('text/plain');

    // Replace newline characters with <br>
    const formattedText = pastedText.replace("\n", '<br>');

    // Update the model
    this.TextArea = formattedText;
  }
  
  onSendMessage(){
    const date = new Date().getTime();
    if(this.TextArea.length == 0 ) return 
    
    this.ChatMessageService.AddMessage(this.Username ,this.TextArea.replace("\n","<br>") )
    console.log(this.TextArea);
    
    this.TextArea = ''
  }

}
