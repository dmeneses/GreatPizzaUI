import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent<T> implements OnInit {

  @Input()
  data: Array<T>;

  constructor() { }

  ngOnInit() {
  }

}
