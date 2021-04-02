import { ReadProduct } from './ReadProduct';

export interface PageInfo {
  pageNumber: number;
  totalPage: number;
  pageSize: number;
  totalItems: number;
  data: ReadProduct[];
}
