import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { IAuthRepository } from './repositories/auth.repository';
import { AuthRepository } from './repositories/auth.repository.impl';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    
    },
    { provide: IAuthRepository, useClass: AuthRepository }

  ]
})
export class CoreModule { }
