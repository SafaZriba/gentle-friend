import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';  
@NgModule({
  declarations: [   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent,
    ChatComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
