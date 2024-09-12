
import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../shared/data-access/base-http.service';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseHttpService {
  /* constructor (
    private http: HttpClient
  ) {
  } */
  limit = 5;

  getProducts(page: number): Observable<Product[]> {
    //return this.http.get('https://fakestoreapi.com/products');
    return this.http.get<Product[]>(`${this.apiUrl}/products`, {
      params: {
        limit: page * this.limit,
      },
    });
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}
