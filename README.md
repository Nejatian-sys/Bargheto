# Product Analytics Dashboard

این یک پروژه Angular برای مدیریت محصولات، احراز هویت و نمایش داشبورد آنالیتیکس است.

---

## 🚀 ویژگی‌های پروژه
- احراز هویت با **Username & Password**
- استفاده از **Angular 20**
- استفاده از **Angular Material**
- Paging محصولات
- ساختار ماژولار (Auth و Products)
- اتصال به وب‌سرویس (API)

---

## 🔐 اطلاعات ورود (Demo Credentials)
برای ورود به سیستم، از اطلاعات زیر استفاده کنید:

Username: emilys
Password: emilyspass

---

## 📁 ساختار پوشه‌ها

src/
 └── app/
     ├── core/    
     ├── interceptors/
     │   │   └── auth.interceptor.ts                    
     │   ├── services/
     │   │   ├── auth.service.ts   
     │   │   └── products.service.ts
     │   │
     │   │ 
     │   ├── repositories/         
     │   │   ├── auth.repository.ts
     │   │   ├── user.repository.interface.ts
     │   │   └── user.repository.ts 
     │   │   ├── auth.repository.impl.ts    
     │   │  
     │   ├
     │   └── models/
     │       ├── user.model.ts
     │       └── product.model.ts
     │
     │
     ├── features/
     │   ├── auth/
     │   │   ├── login/
     │   │   │   └── login.component.html   
     │   │   ├── auth-moudule.ts
     │   │   ├── auth-routing.module.ts
     │   │      
     │   │
     │   ├── products/
     │   │   ├── pages/
     │   │   │   ├── products-list/
     │   │   │   │   ├── products-list.ts
     │   │   │   │   ├── products-list.html
     │   │   │   │   └── products-list.scss
     │   │   │   └── product-details.ts
     │   │   │   └── product-details.html
     │   │   ├── products.module.ts
     │   │   ├── products-routing.module.ts 
     │   │   ├── components/product-card/
     │   │   │   ├── product-card.ts
     │   │   │   ├── product-card.html
     │   │   │   └── product-card.scss
     │   │   └── products.module.ts
     │
     ├── shared/                      # UI components reusable
     │   ├── components/pagination/
     │   │   ├── pagination.ts
     │   │   ├── pagination.html
     │   │   └── pagination.scss
     │   ├── components/search-box/
     │   │   ├── search-box.ts
     │   │   ├── search-box.html
     │   │   └── search-box.scss
     │   ├── components/product-card/
     │   │   ├── product-card.ts
     │   │   ├── product-card.html
     │   │   └── product-card.scss
     │   ├── pipes/
     │   └── shared.module.ts
     │
     ├── app-routing.module.ts
     └── app.component.ts


---

## ▶️ اجرای پروژه

ابتدا پکیج‌ها را نصب کنید:

```bash
npm install
پروژه را اجرا کنید:
ng serve
سپس وارد شوید:
http://localhost:4200/auth/login

