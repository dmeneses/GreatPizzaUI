import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent<T extends Product> implements OnInit {

  @Input()
  data: Array<T>;

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
