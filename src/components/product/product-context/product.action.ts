import { Product } from '../../../types/product';

export type ProductAction =
  | { type: 'LOADING_PRODUCTS' }
  | { type: 'FETCH_PRODUCTS_SUCCESS'; products: Product[] }
  | { type: 'FETCH_PRODUCTS_FAILED' };

export const loadingProducts = (): ProductAction => ({
  type: 'LOADING_PRODUCTS',
});

export const fetchProductsSuccess = (products: Product[]): ProductAction => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  products,
});

export const fetchProductsFailed = (): ProductAction => ({
  type: 'FETCH_PRODUCTS_FAILED',
});
