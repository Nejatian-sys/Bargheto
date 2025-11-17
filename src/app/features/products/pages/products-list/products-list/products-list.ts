import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Subject, takeUntil } from 'rxjs';

interface Product {
  id: number;
  title: string;
  description?: string;
  price?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
  [key: string]: any;
}

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.html',
  styleUrls: ['./products-list.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  pagedProducts: Product[] = [];

  pageSize = 6;
  currentPage = 0;

  private destroy$ = new Subject<void>();

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadProducts(): void {
    const url = 'https://dummyjson.com/products?limit=0'; // dummyjson: limit=0 returns all
    this.http
      .get<{ products: Product[] }>(url)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.products = Array.isArray(res?.products) ? res.products : [];
          // normalize thumbnails (ensure full http URL if needed)
          this.products = this.products.map((p) => ({
            ...p,
            thumbnail: this.normalizeImageUrl(p.thumbnail),
          }));

          // initial filtered = all products
          this.filteredProducts = [...this.products];

          // reset paging and paginator UI
          this.currentPage = 0;
          if (this.paginator) {
            try {
              this.paginator.firstPage();
            } catch (e) {
              // ignore if paginator not yet initialized
            }
          }

          // compute initial paged items
          this.updatePagedData();

          // ensure UI updates immediately
          try {
            this.cd.detectChanges();
          } catch (e) {
            // ignore lifecycle timing issues
          }
        },
        error: (err) => {
          console.error('Failed to load products', err);
          // keep arrays empty, optionally show user message in template
        },
      });
  }

  private normalizeImageUrl(url?: string): string {
    if (!url) return '';
    // If URL already absolute, return as-is
    if (/^https?:\/\//i.test(url)) return url;
    // Fix common dummyjson relative urls (if any)
    return url.startsWith('/') ? `https://dummyjson.com${url}` : `https://dummyjson.com/${url}`;
  }

  onSearch(event: any): void {
    const q = (event?.target?.value || '').toString().trim().toLowerCase();
    if (!q) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter((p) =>
        (p.title || '').toLowerCase().includes(q)
      );
    }

    // reset to first page
    this.currentPage = 0;
    if (this.paginator) {
      try {
        this.paginator.firstPage();
      } catch (e) {}
    }
    this.updatePagedData();
    // ensure UI updates
    try {
      this.cd.detectChanges();
    } catch (e) {}
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePagedData();
    try {
      this.cd.detectChanges();
    } catch (e) {}
  }

  private updatePagedData(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.filteredProducts.slice(start, end);
  }

  trackById(_: number, item: Product): number {
    return item?.id ?? _;
  }

  // actions
  addProduct(): void {
    // TODO: navigate to add product form
    alert('Add product page not implemented yet');
  }

  view(item: Product): void {
    console.log('VIEW', item);
    // TODO: navigate to product details
  }

  delete(item: Product): void {
    console.log('DELETE', item);
    // TODO: call delete API then refresh list
  }
}
