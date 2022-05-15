import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items!: MenuItem[];
  activeItem!: MenuItem;

  constructor() { }

  ngOnInit(): void {

  }
}
