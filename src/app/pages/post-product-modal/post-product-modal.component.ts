import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-product-modal',
  templateUrl: './post-product-modal.component.html',
  styleUrls: ['./post-product-modal.component.scss'],
  providers: [NgbActiveModal],
})
export class PostProductModalComponent implements OnInit {
  @Output() dismissModal = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  constructor(public activateModal: NgbActiveModal) {}

  ngOnInit(): void {}

  close() {
    // this.activateModal.close();
    this.closeModal.emit('ok');
  }

  dismiss() {
    // this.activateModal.dismiss();
    this.dismissModal.emit('ok');
  }
}
