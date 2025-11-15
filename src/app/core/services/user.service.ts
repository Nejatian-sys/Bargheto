import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Headerها دقیق مطابق Postman
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Use-Auth': 'true'
    });

    const body = {
      username,
      password
    };

    return this.http.post(this.apiUrl, body, { headers }).pipe(
      tap((res) => {
        console.log('Login success:', res);
      }),
      catchError((err) => {
        console.log('Login error:', err);
        return throwError(() => err);
      })
    );
  }
}
