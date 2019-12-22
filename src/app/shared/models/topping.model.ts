import { Product } from './product.model';

export class Topping extends Product {
  _id?: string;
  name: string;
  shortDescription: string;
}