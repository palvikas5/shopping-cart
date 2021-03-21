import { CartLine } from './cart-line';
import { CartSummary } from './cart-summary';

export interface Cart {
  _id: string;
  cartLines: CartLine[];
  summary: CartSummary;
}
