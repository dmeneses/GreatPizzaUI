import { Product } from './product.model';
import { Topping } from './topping.model';

export class Pizza extends Product {
  _id?: string;
  toppings: Topping[];
}
