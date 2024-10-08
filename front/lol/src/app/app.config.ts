import { ApplicationConfig, importProvidersFrom  } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

export const appConfig: ApplicationConfig = { 
  providers: [
    provideRouter(routes), 
    ...ModalModule.forRoot().providers || [],
    provideClientHydration(),
    importProvidersFrom(
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  )
  ]
};
