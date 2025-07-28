import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { AddIngPipe } from './pipes/add-ing-pipe';
import { MettrePremierCharEnMajusPipe } from './pipes/mettre-premier-char-en-majus-pipe';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ListeProviders } from './liste-providers/liste-providers';

@NgModule({
  declarations: [
    App,
    Home,
    AddIngPipe,
    MettrePremierCharEnMajusPipe,
    ListeProviders
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch(), withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
