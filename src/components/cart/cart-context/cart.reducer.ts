import { Cart } from '../../../types/cart';
import { CartAction } from './cart.action';

export interface CartState {
  isLoading: boolean;
  cart?: Cart;
  totalItems: number;
}

export const initialCartState: CartState = {
  isLoading: false,
  cart: undefined,
  totalItems: 0,
};

export const cartReducer = (
  prevState: CartState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    case 'LOADING_CART':
      return {
        ...prevState,
        isLoading: true,
      };
    case 'FETCH_CART_SUCCESS':
    case 'ADD_PRODUCT_SUCCESS':
    case 'UPDATE_QUANTITY_SUCCESS':
      return {
        ...prevState,
        isLoading: false,
        cart: action.cart,
        totalItems: action.cart.cartLines.reduce(
          (acc, cartLine) => acc + cartLine.quantity,
          0,
        ),
      };
    default:
      return prevState;
  }
};
