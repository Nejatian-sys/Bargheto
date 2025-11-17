import { Injectable, inject } from '@angular/core';
import { IAuthRepository } from '../repositories/auth.repository';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private repo = inject(IAuthRepository); // کلاس واقعی

  login(username: string, password: string) {
    return this.repo.login(username, password).pipe(
      tap(res => console.log("✔ Login success:", res)),
      catchError(err => {
        console.log("❌ Login error:", err);
        return throwError(() => err);
      })
    );
  }
}
