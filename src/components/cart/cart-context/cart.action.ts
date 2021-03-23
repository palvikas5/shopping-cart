import { Cart } from '../../../types/cart';

export type CartAction =
  | { type: 'LOADING_CART' }
  | { type: 'FETCH_CART_SUCCESS'; cart: Cart }
  | { type: 'FETCH_CART_FAILED' }
  | { type: 'ADD_PRODUCT_SUCCESS'; cart: Cart }
  | { type: 'ADD_PRODUCT_FAILED' }
  | { type: 'UPDATE_QUANTITY_SUCCESS'; cart: Cart }
  | { type: 'UPDATE_QUANTITY_FAILED' };

export const loadingCart = (): CartAction => ({
  type: 'LOADING_CART',
});

export const fetchCartSuccess = (cart: Cart): CartAction => ({
  type: 'FETCH_CART_SUCCESS',
  cart,
});

export const fetchCartFailed = (): CartAction => ({
  type: 'FETCH_CART_FAILED',
});

export const addProductSuccess = (cart: Cart): CartAction => ({
  type: 'ADD_PRODUCT_SUCCESS',
  cart,
});

export const addProductFailed = (): CartAction => ({
  type: 'ADD_PRODUCT_FAILED',
});

export const updateQuantitySuccess = (cart: Cart): CartAction => ({
  type: 'UPDATE_QUANTITY_SUCCESS',
  cart,
});

export const updateQuantityFailed = (): CartAction => ({
  type: 'UPDATE_QUANTITY_FAILED',
});
