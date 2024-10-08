import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { MoedaPipe } from '../../shared/pipes';
import { MoedaPipe } from '../../../shared/pipes';
import { ConfirmaComponent } from '../confirmModal/confirma/confirma.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
//import { FuncionarioService } from '../../services/funcionario.service';
import { FuncionarioService } from '../../../services/funcionario.service';
import { funcionarioModalComponent } from '../funcionarioModal/funcionario.modal';

interface Funcionario {
  id: number;
  email: string;
  nome: string;
  dtNasc: string;
  senha: string;
}

@Component({
  selector: 'app-funcionario',
  standalone: true,
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule, funcionarioModalComponent, MoedaPipe],
  providers: [FuncionarioService]
})
export class FuncionarioComponent implements OnInit {
  
  funcionarios: Funcionario[] = [];
  funcionarioSelecionado: Funcionario = { id: 0, email: '', nome: '', dtNasc: "" , senha: ''  };
  editando: boolean = false;
  showModal: boolean = false;
  modalRef?: BsModalRef;

  constructor(
    private funcionarioService: FuncionarioService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
        this.listaFuncionarios();
  }

  listaFuncionarios(): void {
    this.funcionarioService.getFuncionario().subscribe({
      next: (funcionarios) => {
        this.funcionarios = funcionarios;
        console.log('Funcionarios recebidos:', funcionarios);
      },
      error: (err) => console.error(err),
      complete: () => console.info('Lista de funcionarios completa')
    });
  }

  iniciarInclusao() {
    console.log('Iniciar Inclusão');
    this.funcionarioSelecionado = { id: 0, email: '', nome: '', dtNasc: "" , senha: ''  };
    this.editando = true;
    this.showModal = true;
  }

  editarFuncionario(funcionario: Funcionario) {
    console.log('Editar Funcionario', funcionario);
    this.funcionarioSelecionado = { ...funcionario };
    this.editando = true;
    this.showModal = true;
  }

  salvarFuncionario(funcionario: Funcionario) {
    console.log('Salvar Funcionario', funcionario);
    if (funcionario.id) {
      const index = this.funcionarios.findIndex(r => r.id === funcionario.id);
      this.funcionarios[index] = funcionario;
    } else {
      funcionario.id = this.funcionarios.length + 1;
      this.funcionarios.push(funcionario);
    }
    this.cancelar();
  }

  cancelar() {
    console.log('Cancelar');
    this.editando = false;
    this.showModal = false;
  }



  deleteFuncionario(id: number) {
    const initialState = {
      message: 'Tem certeza que deseja excluir este Funcionario?'
    };
    this.modalRef = this.modalService.show(ConfirmaComponent, {initialState});

    this.modalRef.content.onConfirm = () => {
      this.funcionarios = this.funcionarios.filter(funcionario => funcionario.id !== id);
      this.modalRef?.hide();
    };

    this.modalRef.content.onDecline = () => {
      this.modalRef?.hide();
    };
  }


}
