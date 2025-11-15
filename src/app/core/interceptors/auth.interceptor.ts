import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
 
    const fakeToken = 'Bearer FAKE_JWT_TOKEN';


    const clonedReq = req.clone({
      setHeaders: {
        Authorization: fakeToken
      }
    });

    // ادامه مسیر request
    return next.handle(clonedReq);
  }
}
