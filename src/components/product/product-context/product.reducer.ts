import { Product } from '../../../types/product';
import { ProductAction } from './product.action';

export interface ProductState {
  isLoading: boolean;
  products: Product[];
}

export const initialProductState: ProductState = {
  isLoading: false,
  products: [],
};

export const productReducer = (
  prevState: ProductState,
  action: ProductAction,
): ProductState => {
  switch (action.type) {
    case 'LOADING_PRODUCTS':
      return {
        ...prevState,
        isLoading: true,
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...prevState,
        isLoading: false,
        products: action.products,
      };
    default:
      return prevState;
  }
};
