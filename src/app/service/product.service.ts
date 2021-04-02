import { PutProduct } from '../Dtos/PutProduct';
import { SearchProduct } from '../Dtos/SearchProduct';
import { PostProduct } from './../Dtos/PostProduct';
import { BaseService } from './base.service';
import { ReadProduct } from './../Dtos/ReadProduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageInfo } from './../Dtos/PageInfo';

@Injectable({ providedIn: 'root' })
export class productService extends BaseService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getPage(index: number): Observable<any> {
    const url = `https://localhost:44309/api/product/page/${index}`;
    return this.get<PageInfo>(url, {});
  }
  search(body: SearchProduct): Observable<ReadProduct[]> {
    const url = `https://localhost:44309/api/product/search`;
    return this.post<ReadProduct[]>(url, body);
  }
  getProduct(id: string): Observable<any> {
    const url = `https://localhost:44309/api/product/${id}`;
    return this.get<ReadProduct>(url, {});
  }
  postProduct(body: PostProduct): Observable<any> {
    const url = `https://localhost:44309/api/product`;
    return this.post<ReadProduct>(url, body);
  }
  deleteProduct(id: string): Observable<any> {
    const url = `https://localhost:44309/api/product/${id}`;
    return this.delete<ReadProduct>(url, {});
  }
  putProduct(id: string, body: PutProduct): Observable<any> {
    const url = `https://localhost:44309/api/product/${id}`;
    console.log(url);
    return this.put<ReadProduct>(url, body);
  }
}
