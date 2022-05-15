import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Metadata } from 'src/app/core/filters/metadata';
import { ProductFilter } from 'src/app/core/filters/product-filter';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

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
