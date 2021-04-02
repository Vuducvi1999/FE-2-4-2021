import { Component, OnInit } from '@angular/core';
import { modalHeader, modalFooter } from 'src/app/shared/models/modal.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  headerData!: modalHeader;
  footerData!: modalFooter;

  constructor() {}

  ngOnInit(): void {
    this.headerData = new modalHeader();
    this.headerData.title = 'Update Product';
    this.footerData = new modalFooter();
    this.footerData.action = 'Save';
  }
}
