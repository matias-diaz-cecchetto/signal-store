import { Component, effect, Input} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: ``
})
export default class ProductDetailComponent {

  @Input() id!: string; // Correctamente utiliza @Input para marcar la propiedad como input.

  constructor() {
    effect(() => {
      console.log(this.id);
    });
  }
}
