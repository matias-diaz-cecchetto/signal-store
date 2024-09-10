import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../data-access/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  //providers: [ProductService]
})
export default class ProductListComponent implements OnInit {
  private products: any;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (response: any) => {
        this.products = response;
        console.log('Productos:', this.products); // Muestra los productos en la consola.
      },
      error: (error: any) => {
        console.error('Error al obtener productos:', error);
      },
    });
  }
}
