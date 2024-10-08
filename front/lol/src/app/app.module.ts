// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component'; // Importe o componente

import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { Numerico } from './shared/directives/numerico';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarPedidoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Numerico, // Adicione o FormsModule aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
