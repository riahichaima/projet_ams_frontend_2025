import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { AddIngPipe } from './pipes/add-ing-pipe';
import { MettrePremierCharEnMajusPipe } from './pipes/mettre-premier-char-en-majus-pipe';

@NgModule({
  declarations: [
    App,
    Home,
    AddIngPipe,
    MettrePremierCharEnMajusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
