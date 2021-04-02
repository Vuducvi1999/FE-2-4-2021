import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { modalFooter } from 'src/app/shared/models/modal.model';

@Component({
  selector: 'app-modal-footer',
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.scss'],
})
export class ModalFooterComponent {
  @Input() data: any;
  @Output() closeModal = new EventEmitter();

  constructor() {}

  saveAction() {
    this.closeModal.emit('ok');
  }
}
