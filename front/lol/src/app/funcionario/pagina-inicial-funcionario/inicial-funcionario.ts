import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// import { PedidoService } from '../services/pedido.service';
// import { Pedido } from '../shared/models/pedido';
import { PedidoService } from '../../services/pedidos';
import { Pedido } from '../../shared/models';

@Component({
  selector: 'app-inicial-funcionario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicial-funcionario.html',
  styleUrls: ['./inicial-funcionario.css']
})
export class InicialFuncionarioComponent {
  pedidos: Pedido[] = [];


  constructor(private pedidoService: PedidoService) { 
    this.listarPedidosEmAberto();
  }

  listarPedidosEmAberto(): void {
    this.pedidoService.getPedidosByStatus('EM ABERTO').subscribe((data: Pedido[]) => {
      this.pedidos = data.sort((a, b) => new Date(a.dataCriacao).getTime() - new Date(b.dataCriacao).getTime());
    });
  }

  registrarRecolhimento(pedido: Pedido): void {
    pedido.status = 'RECOLHIDO';
    this.pedidoService.updatePedidoStatus(pedido.id, 'RECOLHIDO').subscribe(() => {
      this.listarPedidosEmAberto();
    });
  }
}

