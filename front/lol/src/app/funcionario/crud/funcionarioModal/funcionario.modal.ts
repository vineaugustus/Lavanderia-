import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { CampoObrigatorio, MoedaDirective, Numerico } from '../../shared/directives';
//import { MoedaPipe } from '../../shared/pipes';
import { CampoObrigatorio } from '../../../shared/directives';
import { MoedaPipe } from '../../../shared/pipes';
import { MoedaDirective } from '../../../shared/directives';
import { Numerico } from '../../../shared/directives';

interface Funcionario {
  id: number;
  email: string;
  nome: string;
  dtNasc: string;
  senha: string;
}

  @Component({
    selector: 'app-funcionario-modal',
    standalone: true,
    templateUrl: './funcionario.modal.html',
    styleUrls: ['./funcionario.modal.css'],
    imports: [CommonModule, FormsModule,Numerico, CampoObrigatorio, MoedaPipe, MoedaDirective]
})
export class funcionarioModalComponent {
    @Input() funcionario: Funcionario = { id: 0, email: '', nome: '', dtNasc: "" , senha: ''  };
    @Output() onSave = new EventEmitter<Funcionario>();
    @Output() onCancel = new EventEmitter<void>();
  
    save() {
      this.onSave.emit(this.funcionario);
    }
  
    cancel() {
      this.onCancel.emit();
    }
  }