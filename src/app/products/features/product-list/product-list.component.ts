import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../data-access/products.service';
import { ProductsStateService } from '../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsStateService]
})
export default class ProductListComponent implements OnInit {
  //products: any;
  productsState =  inject(ProductsStateService)
  constructor(
    //private productService: ProductService,
    //private productsState: ProductsStateService
  ) {}

  ngOnInit(): void {
    /* this.productService.getProducts().subscribe({
      next: (response: any) => {
        this.products = response;
        console.log('Productos:', this.products); // Muestra los productos en la consola.
      },
      error: (error: any) => {
        console.error('Error al obtener productos:', error);
      },
    }); */
    console.log(this.productsState.state().products);


  }
}
