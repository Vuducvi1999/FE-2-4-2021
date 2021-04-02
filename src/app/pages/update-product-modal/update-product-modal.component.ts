import { Component, OnInit } from '@angular/core';
import { modalHeader, modalFooter } from 'src/app/shared/models/modal.model';

@Component({
  selector: 'app-update-product-modal',
  templateUrl: './update-product-modal.component.html',
  styleUrls: ['./update-product-modal.component.scss'],
})
export class UpdateProductModalComponent implements OnInit {
  headerData = { title: 'Update Product' };
  footerData = { action: 'Save' };

  constructor() {}

  ngOnInit(): void {}
}
