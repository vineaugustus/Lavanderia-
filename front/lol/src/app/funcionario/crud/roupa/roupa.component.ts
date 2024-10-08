import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoupaModalComponent } from '../roupaModal/roupa.modal';
import { RoupaService } from '../../../services/roupa.service';
import { MoedaPipe } from '../../../shared/pipes';
import { ConfirmaComponent } from '../confirmModal/confirma/confirma.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

interface Roupa {
  id: number;
  nome: string;
  preco: number;
  prazo: number;
}

@Component({
  selector: 'app-roupa',
  standalone: true,
  templateUrl: './roupa.component.html',
  styleUrls: ['./roupa.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule, RoupaModalComponent, MoedaPipe],
  providers: [RoupaService]
})
export class RoupaComponent implements OnInit {
  roupas: Roupa[] = [];
  roupaSelecionada: Roupa = { id: 0, nome: '', preco: 0, prazo: 0 };
  editando: boolean = false;
  showModal: boolean = false;
  modalRef?: BsModalRef;
  ordenacaoAtual: { coluna: string, ascendente: boolean} = { coluna: '', ascendente: true};
  mensagemErro: string = '';

  constructor(
    private roupaService: RoupaService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
        this.listaRoupas();
  }

  // listaRoupas(): void {
  //   this.roupaService.getRoupa().subscribe({
  //     next: (roupas) => {
  //       //this.roupas = roupas;
  //       this.roupas = roupas.map(roupa => ({ ...roupa, preco: parseFloat(roupa.preco.toString()) }));
  //       console.log('Roupas recebidas:', roupas);
  //     },
  //     error: (err) => console.error(err),
  //     complete: () => console.info('Lista de roupas completa')
  //   });
  //}


  listaRoupas(): void {
    this.roupaService.getRoupa().subscribe(
      (roupas: Roupa[]) => {
        this.roupas = roupas;
        //this.ordenarRoupas();
      },
      (error) => {
        this.mensagemErro = error;
      }
    );
  }

  // listaRoupas(): void {
  //   this.roupaService.getRoupa().subscribe((roupas: Roupa[]) => {
  //     this.roupas = roupas;
  //   });
  // }

  // iniciarInclusao() {
  //   console.log('Iniciar Inclusão');
  //   this.roupaSelecionada = { id: 0, nome: '', preco: 0, prazo: 0 };
  //   this.editando = true;
  //   this.showModal = true;
  // }

  iniciarInclusao(): void {
    //this.roupaSelecionada = new Roupa();
    this.roupaSelecionada = { id: 0, nome: '', preco: 0, prazo: 0 };
    this.showModal = true;
    this.editando = true;
  }

  editarRoupa(roupa: Roupa) {
    console.log('Editar Roupa', roupa);
    this.roupaSelecionada = { ...roupa };
    this.editando = true;
    this.showModal = true;
  }

  // salvarRoupa(roupa: Roupa) {
  //   console.log('Salvar Roupa', roupa);
  //   roupa.preco = parseFloat(roupa.preco.toString().replace(/[^\d.-]/g, ''));
  //   if (roupa.id) {
  //     const index = this.roupas.findIndex(r => r.id === roupa.id);
  //     this.roupas[index] = roupa;
  //   } else {
  //     roupa.id = this.roupas.length + 1;
  //     this.roupas.push(roupa);
  //   }
  //   this.cancelar();
 // }

    // salvarRoupa(roupa: Roupa): void {
    //   this.roupaService.saveRoupa(roupa).subscribe(() => {
    //   this.listaRoupas();
    //   this.cancelar();
    // });
    // }

    salvarRoupa(roupa: Roupa): void {
      this.roupaService.saveRoupa(roupa).subscribe(
        () => {
          this.listaRoupas();
          this.cancelar();
        },
        (error) => {
          this.mensagemErro = error;
        }
      );
    }


  // cancelar() {
  //   console.log('Cancelar');
  //   this.editando = false;
  //   this.showModal = false;
  // }

  cancelar(): void {
    this.showModal = false;
    //this.roupaSelecionada = null;
    this.editando = false;
  }



  deleteRoupa(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta roupa?')) {
      this.roupaService.deleteRoupa(id).subscribe(() => {
        this.listaRoupas();
      });
    }}

   
    ordenarPor(coluna: keyof Roupa): void {
      if (this.ordenacaoAtual.coluna === coluna) {
        this.ordenacaoAtual.ascendente = !this.ordenacaoAtual.ascendente;
      } else {
        this.ordenacaoAtual.coluna = coluna;
        this.ordenacaoAtual.ascendente = true;
      }
      this.ordenarRoupas();
    }
  
    ordenarRoupas(): void {
      const { coluna, ascendente } = this.ordenacaoAtual;
      this.roupas.sort((a, b) => {
        let comparacao = 0;
        
        if (coluna === 'id' || coluna === 'preco' || coluna === 'prazo') {
          comparacao = a[coluna] - b[coluna];
        } else if (coluna === 'nome') {
          comparacao = a[coluna].localeCompare(b[coluna]);
        }
        
        return ascendente ? comparacao : -comparacao;
      });
    }


  // deleteRoupa(id: number) {
  //   const initialState = {
  //     message: 'Tem certeza que deseja excluir?'
  //   };
  //   this.modalRef = this.modalService.show(ConfirmaComponent, {initialState});

  //   this.modalRef.content.onConfirm = () => {
  //     this.roupas = this.roupas.filter(roupa => roupa.id !== id);
  //     this.modalRef?.hide();
  //   };

  //   this.modalRef.content.onDecline = () => {
  //     this.modalRef?.hide();
  //   };
  // }


  // deleteRoupa(id: number) {
  //   console.log('Deletar Roupa', id);
  //   this.roupas = this.roupas.filter(r => r.id !== id);
  // }
}
function salvarRoupa(roupa: any, Roupa: any) {
  throw new Error('Function not implemented.');
}


