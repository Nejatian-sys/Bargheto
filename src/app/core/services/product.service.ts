import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'  // این باعث میشه singleton باشه
})
export class ProductService {
  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  // گرفتن همه محصولات
  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.baseUrl).pipe(
      // ساده‌تر: فقط استفاده مستقیم از res.products
      map(res => res.products)
    );
  }

  // گرفتن یک محصول با id
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  // گرفتن محصولات بر اساس دسته‌بندی
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(`${this.baseUrl}/category/${category}`).pipe(
      map(res => res.products)
    );
  }
}
