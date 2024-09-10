import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
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

  getProducts(): Observable<Product[]> {
    //return this.http.get('https://fakestoreapi.com/products');
    return this.http.get<any[]>(`${this.apiUrl}/products`);
    /* this.http.get(`${this.apiUrl}/products`).subscribe({
      next: (response: any) => {
        return response;
        //console.log(`Productos: ${response}`);
      },
      error: (error:any) => {
        console.error('Error al obtener productos: '+ error);
      }
    }) */
  }
}
