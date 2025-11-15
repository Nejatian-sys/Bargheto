import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/products-list/products-list/products-list';
import { ProductDetails } from './pages/product-details/product-details/product-details';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetails }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
