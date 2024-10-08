import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pedido } from '../../shared/models';
import { PedidoService } from '../../services/pedidos';

@Component({
  selector: 'app-func-lista-pedidos',
  standalone: true,
  templateUrl: './funcListaPedidos.html',
  styleUrls: ['./funcListaPedidos.css'],
  imports: [CommonModule, FormsModule],
  providers: [PedidoService]
})
export class FuncListaPedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  filtro: string = 'todos';
  dataInicio: string = '';
  dataFim: string = '';

  private pedidoService = inject(PedidoService);

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos(): void {
    this.pedidoService.getPedidos().subscribe(pedidos => {
      this.pedidos = pedidos.sort((a, b) => new Date(a.dataCriacao).getTime() - new Date(b.dataCriacao).getTime());
    });
  }

  filtrarPedidos(): void {
    this.getPedidos(); 

    if (this.filtro === 'hoje') {
      const hoje = new Date().toDateString();
      this.pedidos = this.pedidos.filter(p => new Date(p.dataCriacao).toDateString() === hoje);
    } else if (this.filtro === 'periodo') {
      const inicio = new Date(this.dataInicio);
      const fim = new Date(this.dataFim);
      this.pedidos = this.pedidos.filter(p => new Date(p.dataCriacao) >= inicio && new Date(p.dataCriacao) <= fim);
    }
  }

  confirmarRecolhimento(pedido: Pedido): void {
    pedido.status = 'RECOLHIDO';
    this.pedidoService.updatePedido(pedido).subscribe(() => this.getPedidos());
  }

  confirmarLavagem(pedido: Pedido): void {
    pedido.status = 'AGUARDANDO PAGAMENTO';
    this.pedidoService.updatePedido(pedido).subscribe(() => this.getPedidos());
  }

  finalizarPedido(pedido: Pedido): void {
    pedido.status = 'FINALIZADO';
    this.pedidoService.updatePedido(pedido).subscribe(() => this.getPedidos());
  }

  getStatusClasse(status: string): string {
    switch (status) {
      case 'EM ABERTO': return 'em-aberto';
      case 'REJEITADO':
      case 'CANCELADO': return 'rejeitado';
      case 'RECOLHIDO': return 'recolhido';
      case 'AGUARDANDO PAGAMENTO': return 'aguardando-pagamento';
      case 'PAGO': return 'pago';
      case 'FINALIZADO': return 'finalizado';
      default: return '';
    }
  }
}
