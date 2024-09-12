import { Routes } from '@angular/router';

export const routes: Routes = [
  // Ruta principal por defecto
  {
    path:'',
    loadChildren: () => import('./products/features/product-shell/product.route'),
  },
  // Ruta invalida
  {
    path: '**',
    redirectTo: ''
  }
];
