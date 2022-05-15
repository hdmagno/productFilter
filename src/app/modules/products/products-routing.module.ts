import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ProductsComponent, children: [
    {path: 'card', component: CardComponent},
    {path: 'table', component: TableComponent}
  ]},
  {path: '', redirectTo: 'products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
