import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PRODUCTS_URL, PRODUCT_BY_CATE_URL, PRODUCT_BY_ID_URL, PRODUCT_BY_SEARCH_URL, THUMB_BY_ID_URL, THUMB_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_URL);
  }

  getThumbnail(): Observable<Product[]> {
    return this.http.get<Product[]>(THUMB_URL);
  }

  getDetail(id: string):Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCT_BY_ID_URL + id);
  }

  getProductThumbnail(id: string): Observable<Product> {
    return this.http.get<Product>(THUMB_BY_ID_URL + id);
  }

  getAllProductsBySearchTerm(searchTerm: string){
    return this.http.get<Product[]>(PRODUCT_BY_SEARCH_URL + searchTerm);
  }
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCT_BY_CATE_URL + category);
}
}