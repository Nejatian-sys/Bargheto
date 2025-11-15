import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss',
})


  export class ProductListComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];

  pageSize = 6;       // تعداد آیتم در هر صفحه
  currentPage = 0;     // صفحه فعلی

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get('https://dummyjson.com/products')
      .subscribe((res: any) => {
        this.products = res.products;
        this.filteredProducts = res.products;
      });
  }


    applyPaging() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;

    this.filteredProducts = this.products.slice(start, end);
  }
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.applyPaging();
  }

onSearch(event: any) {
    const query = event.target.value.toLowerCase();

    const filtered = this.products.filter(p =>
      p.title.toLowerCase().includes(query)
    );

    // بعد از سرچ باید از اول paginate کنیم
    this.currentPage = 0;
    this.filteredProducts = filtered.slice(0, this.pageSize);
  }



  addProduct() {
    alert("صفحه افزودن محصول هنوز ساخته نشده 😄");
  }

  view(item: any) {
    console.log("VIEW:", item);
  }

  delete(item: any) {
    console.log("DELETE:", item);
  }
}
