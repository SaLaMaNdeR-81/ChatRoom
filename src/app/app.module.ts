import { NgModule ,NO_ERRORS_SCHEMA } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AlertMessageComponent } from './Component/AlertMessage/AlertMessage.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageChatRoom } from './Page/ChatRoom/ChatRoom.Page';


import { ComponentAuth } from './Component/Auth/Auth.Component';
import { ComponentLoading } from './Component/Loading/Loading.Component';

import { ChatRoom_InputContainer } from './Page/ChatRoom/LayOut/InputContainer/InputContainer.Component';
import { ChatRoom_Header } from './Page/ChatRoom/LayOut/Header/Header.Component';
import { ChatRoom_Content } from './Page/ChatRoom/LayOut/Content/Content.Component';
import { ChatRoomMessageComponent } from './Component/ChatMessage/ChatMessage.Component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AlertMessageComponent,
    AppComponent,

    PageChatRoom,
    
    ComponentAuth,
    ComponentLoading,

    ChatRoom_InputContainer,
    ChatRoom_Header,
    ChatRoom_Content,
    ChatRoomMessageComponent,
  ],
  imports: [
    SocketIoModule.forRoot(config),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
