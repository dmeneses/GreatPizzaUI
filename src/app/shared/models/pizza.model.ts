import { Product } from './product.model';

export class Pizza extends Product {
  _id?: string;
  name: string;
  shortDescription: string;
  imageUrl?: string;
}