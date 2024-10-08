import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirma',
  standalone: true,
  templateUrl: './confirma.component.html',
  styleUrls: ['./confirma.component.css']
})
export class ConfirmaComponent {
  message: string = ""; 
  
  constructor(public bsModalRef: BsModalRef) {}


     onConfirm(): void {
    this.bsModalRef.hide();
  }

  onDecline(): void {
    this.bsModalRef.hide();
  }

  onClose(): void {
    this.bsModalRef.hide();
  }
}
