import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CampoObrigatorio, MoedaDirective, Numerico } from '../../../shared/directives';
import { MoedaPipe } from '../../../shared/pipes';

interface Roupa {
    id: number;
    nome: string;
    preco: number;
    prazo: number;
  }

  @Component({
    selector: 'app-roupa-modal',
    standalone: true,
    templateUrl: './roupa.modal.html',
    styleUrls: ['./roupa.modal.css'],
    imports: [CommonModule, FormsModule,Numerico, CampoObrigatorio, MoedaPipe, MoedaDirective]
})
export class RoupaModalComponent {
    @Input() roupa: Roupa = { id: 0, nome: '', preco: 0 , prazo: 0  };
    @Output() onSave = new EventEmitter<Roupa>();
    @Output() onCancel = new EventEmitter<void>();
  
    // save() {
    //   this.onSave.emit(this.roupa);
    // }
  
    save() {
      //precisou de conversão
      this.roupa.preco = MoedaDirective.parseCurrency((<HTMLInputElement>document.getElementById('preco')).value);
      this.onSave.emit(this.roupa);
    }

    cancel() {
      this.onCancel.emit();
    }
  }