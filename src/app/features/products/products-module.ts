import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './pages/products-list/products-list/products-list';
import { ProductDetails } from './pages/product-details/product-details/product-details';
import { ProductCard } from './components/product-card/product-card';
// 👇 Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardActions } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetails,
    ProductCard,
    //ProductCardComponent
  ],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    ProductsRoutingModule ,
    MatCardActions,
    MatPaginatorModule
  ]
})
export class ProductsModule {}
