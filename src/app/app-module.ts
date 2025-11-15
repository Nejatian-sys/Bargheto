import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
//import { ProductCard } from './shared/components/product-card/product-card/product-card';
//import { ProductsList } from './features/products/pages/products-list/products-list/products-list';
//import { ProductDetails } from './features/products/pages/product-details/product-details/product-details';
import { CommonModule } from '@angular/common'
import { CoreModule } from './core/core-module';
//import {  LoginComponent } from './features/auth/auth/login/login/login.component';
import { AuthModule } from './features/auth/auth/auth-module';
import { provideHttpClient } from '@angular/common/http';




@NgModule({
  declarations: [
    App,
   // LoginComponent
    //ProductCard,
    //ProductsList,
    //ProductDetails,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(), provideHttpClient()  
  ],
  bootstrap: [App]
})
export class AppModule { }
