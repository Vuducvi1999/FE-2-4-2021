import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalHeaderComponent } from './components/modal/modal-header/modal-header.component';
import { ModalFooterComponent } from './components/modal/modal-footer/modal-footer.component';
import { UpdateProductComponent } from './components/modal/update-product/update-product.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ModalHeaderComponent,
    ModalFooterComponent,
    UpdateProductComponent,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
