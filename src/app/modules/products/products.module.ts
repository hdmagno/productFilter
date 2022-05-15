import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

//primeng
import {CardModule} from 'primeng/card';
import {PaginatorModule} from 'primeng/paginator';
import {TabMenuModule} from 'primeng/tabmenu';

//custom
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CardComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CardModule,
    PaginatorModule,
    TabMenuModule,
  ]
})
export class ProductsModule { }
