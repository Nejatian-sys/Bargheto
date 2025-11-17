import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthRepository } from './auth.repository';

@Injectable()
export class AuthRepository implements IAuthRepository {

  private http = inject(HttpClient);
  private apiUrl = 'https://dummyjson.com/auth/login';

  login(username: string, password: string): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Use-Auth': 'true'
    });

    return this.http.post(this.apiUrl, { username, password }, { headers });
  }
}
