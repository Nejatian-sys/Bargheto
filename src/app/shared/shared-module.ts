import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBox } from './componets/search-box/search-box/search-box';
import { Paginator } from './componets/paginator/paginator/paginator';
import { Spinner } from './componets/spinner/spinner/spinner';


@NgModule({
  declarations: [
    SearchBox,
    Paginator,
    Spinner,
  
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
