import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {
  
  private ChatMessagesSubject = new BehaviorSubject< any[] > ([]);
  public ChatMessages = this.ChatMessagesSubject.asObservable();
  pollingInterval:any
  
  constructor() {

    this.initialize();

  }

  private initialize() {

    this.UpdateAllMessage();

    this.pollingInterval = setInterval(() => {
      this.UpdateAllMessage();
    }, 1000);

  }

  destroy() {
    clearInterval(this.pollingInterval);
  }


  // =====================================
  
  public AddMessage( Username: string, Text: string ) {

    const Message = {
      username : Username,
      message : Text       
    }

    this.AddNewMessage(Username,Text)

    const CurrentMessages = this.ChatMessagesSubject.getValue();
    const updatedMessages = [...CurrentMessages, Message];
    this.ChatMessagesSubject.next(updatedMessages);

  }

  // =====================================

  private AddNewMessage(Username:string ,Message:string ){

    const data = {
      username : Username ,
      message : Message.replace("\n" , "<br>").toString() ,
    }

    var dd = data

    fetch('http://localhost:3000/message/new-messages' ,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {

      console.log(dd);
      
    })
    .catch(error => console.error(error));

  }

  private async UpdateAllMessage() {
    try {
      const response = await fetch('http://localhost:3000/message/get-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();

      data.shift();

      const FixedData = data.map((item: any) => {
        const [username, date, message] = item.split(':');
        return {
          username,
          date,
          message,
        };
      });

      // console.log(FixedData);

      this.ChatMessagesSubject.next(FixedData);
    } catch (error) {
      console.error(error);
    }
  }

  

}
