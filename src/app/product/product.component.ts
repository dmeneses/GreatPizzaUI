import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent<T extends Product> {

  @Input() data: Array<T>;

  @Input() title: string;

  @Output() edit = new EventEmitter<string>();

  @Output() delete = new EventEmitter<string>();

  @Output() add = new EventEmitter<string>();

  onProductEdit(productId: string) {
    this.edit.emit(productId);
  }

  onProductDelete(productId: string) {
    this.delete.emit(productId);
  }

  onProductAdd() {
    this.add.emit();
  }
}
