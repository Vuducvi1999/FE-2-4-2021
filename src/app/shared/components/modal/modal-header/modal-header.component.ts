import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { modalHeader } from './../../../models/modal.model';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
})
export class ModalHeaderComponent {
  @Input() data: any;
  @Output() dismissModal = new EventEmitter();
  constructor() {}

  dismissAction() {
    this.dismissModal.emit('ok');
  }
}
