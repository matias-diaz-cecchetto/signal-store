import { Component, effect, inject, Input} from '@angular/core';
import { ProductDetailStateService } from '../data-access/products-detail-state.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styles: ``
})
export default class ProductDetailComponent {

  productDetailState = inject(ProductDetailStateService).state;

  @Input() id!: string; // Correctamente utiliza @Input para marcar la propiedad como input.

  constructor() {
    effect(() => {
      console.log(this.id);
      this.productDetailState.getById(this.id)
    });
  }
}
