import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth/auth-module').then(m => m.AuthModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products-module').then(m => m.ProductsModule),
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
