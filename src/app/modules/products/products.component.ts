import { Metadata } from './../../core/filters/metadata';
import { Product } from './../../core/models/product';
import { HttpParams } from '@angular/common/http';
import { ProductService } from './../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductFilter } from 'src/app/core/filters/product-filter';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  initialFilter = {
    page: 1,
    pageSize: 10,
    paginated: true,
    orderBy: '',
    orderDirection: ''
  } as ProductFilter;

  metadata = {
    page: 0,
    pageSize: 0,
    totalPages: 0,
    totalCount: 0,
    hasPrevious: false,
    hasNext: false,
  } as Metadata

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts(this.initialFilter);
  }

  loadProducts(filter: ProductFilter) {
    let params = new HttpParams();

    params = params.set('Page', filter.page);

    if (this.initialFilter.pageSize)
      params = params.set('PageSize', filter.pageSize);

    this.productService.getAllProducts(params)
      .subscribe((response: any) => {
        this.products = response.data;
        this.metadata = response.metadata;
      })
  }

  paginate(event: any) {
    const page = event.page + 1;
    const pageSize = event.rows;
    this.loadProducts({ ...this.initialFilter, page, pageSize });
  }

}
