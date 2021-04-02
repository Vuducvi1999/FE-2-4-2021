import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostProduct } from 'src/app/Dtos/PostProduct';
import { productService } from 'src/app/service/product.service';
import { ReadProduct } from './../../Dtos/ReadProduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  products: ReadProduct[] = [];
  sub: any;
  pages: number[] = [];
  createProduct = this.fb.group({
    WareHouseId: ['', Validators.required],
    TypeId: ['', Validators.required],
    Title: ['', Validators.required],
  });
  updateProduct = this.fb.group({
    Id: ['', Validators.required],
    WareHouseId: ['', Validators.required],
    TypeId: ['', Validators.required],
    Title: ['', Validators.required],
  });
  error = false;
  messagePost = '';
  messageUpdate = '';

  constructor(
    private service: productService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {
    this.route.params.subscribe(() => this.getPage());
  }

  getPage() {
    let index: any = this.route.snapshot.paramMap.get('index');
    index = index ? Number(index) : 1;

    if (this.sub) this.sub.unsubscribe();

    this.sub = this.service.getPage(index).subscribe((data) => {
      this.products = data.data;
      this.pages = [...Array(data.totalPage).keys()].map((i) => i + 1);
      console.log(this.products);
    });
  }

  ngOnInit() {
    this.getPage();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  clickPage(index: number) {
    this.router.navigate(['/home', index]);
  }

  updateModal(modal: any, product: ReadProduct) {
    this.updateProduct.get('Id')?.setValue(product.id);
    this.updateProduct.get('WareHouseId')?.setValue(product.wareHouseId);
    this.updateProduct.get('TypeId')?.setValue(product.typeId);
    this.updateProduct.get('Title')?.setValue(product.title);

    this.modalService.open(modal).result.then(
      (result) => {
        console.log('save');
      },
      (reason) => {
        console.log('colse');
      }
    );
  }

  delete(product: ReadProduct) {
    if (this.sub) this.sub.unsubscribe();
    this.sub = this.service.deleteProduct(product.id).subscribe(() => {
      this.getPage();
    });
  }

  onSubmit() {
    this.error = false;
    if (this.sub) this.sub.unsubscribe();
    this.sub = this.service.postProduct(this.createProduct.value).subscribe(
      () => {
        this.messagePost = 'Success';
      },
      (e) => {
        this.error = true;
        this.messagePost = e.error.title;
        console.log(e);
      }
    );
  }

  onUpdate() {
    this.error = false;
    if (this.sub) this.sub.unsubscribe();
    const id = this.updateProduct.get('Id')?.value;
    this.sub = this.service.putProduct(id, this.updateProduct.value).subscribe(
      () => {
        this.messageUpdate = 'Success';
        this.getPage();
      },
      (e) => {
        this.error = true;
        this.messageUpdate = e.error.title;
        console.log(e);
      }
    );
  }

  post(modalPost: any) {
    console.log(modalPost);
    this.modalService.open(modalPost).result.then(
      (result) => {
        console.log('save');
      },
      (reason) => {
        console.log('colses');
      }
    );
  }

  dismissModal() {}
  closeModal() {}
}
