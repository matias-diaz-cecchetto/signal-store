import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ProductItemCart } from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  // Obtengo los productos del localstorage
  loadProducts(): Observable<ProductItemCart[]> {
    const rawProducts = localStorage.getItem('products');

    return of(rawProducts ? JSON.parse(rawProducts): []);
  }

  // Guardo producto en el localstorage
  saveProducts(products: ProductItemCart[]): void{
    // minuto 1:58:55
    localStorage.setItem('products', JSON.stringify(products));
  }
}
