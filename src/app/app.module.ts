import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { PusherProvider } from '../providers/pusher/pusher';

import { ChatComponent } from '../components/chat/chat';
import { EmojiPanelComponent } from '../components/emoji-panel/emoji-panel';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatComponent,
    EmojiPanelComponent
  ],
  imports: [
  BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false, 
      autoFocusAssist: false
  }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    PusherProvider,
  ]
})
export class AppModule {}
