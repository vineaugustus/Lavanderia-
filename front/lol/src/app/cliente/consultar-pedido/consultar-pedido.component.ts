// consultar-pedido.component.ts

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-consultar-pedido',
  standalone: true,
  templateUrl: './consultar-pedido.component.html',
  styleUrls: ['./consultar-pedido.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]

})
export class ConsultarPedidoComponent {
  numeroPedido: string = '';
  pedidoDetalhes: string = '';
ngOnInit(): void {
  this.pedidoDetalhes = ``;
}

  buscarPedido() {
    // Simulação de dados para demonstração
    this.pedidoDetalhes = `
      <p>Roupas: Camiseta, Calça</p>
      <p>Preço: R$50, R$80</p>
      <p>Preço Total: R$130</p>
      <p>Prazo do Serviço: 2 dias úteis</p>
      <p>Situação: Em andamento</p>
    `;

  console.log(this.pedidoDetalhes)
  }




  fecharModal() {
    this.pedidoDetalhes = '';
  }
}

