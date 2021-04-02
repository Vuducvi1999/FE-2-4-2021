import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';

import { enableProdMode } from '@angular/core';
import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { UpdateProductModalComponent } from './pages/update-product-modal/update-product-modal.component';
import { PostProductModalComponent } from './pages/post-product-modal/post-product-modal.component';
registerLocaleData(en);
enableProdMode();

@NgModule({
  declarations: [AppComponent, HomeComponent, UpdateProductModalComponent, PostProductModalComponent],
  imports: [
    SharedModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzButtonModule,
    NzIconModule,
    NzCheckboxModule,
    NzInputModule,
    CommonModule,
    NzPaginationModule,
    NzListModule,
    NzCardModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
