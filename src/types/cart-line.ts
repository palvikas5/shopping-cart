import { Product } from './product';

export interface CartLine {
  _id: string;
  product: Product;
  quantity: number;
  itemPrice: number;
  itemDiscount: number;
  itemTotal: number;
}
