import React, { useContext, useReducer } from 'react';
import {
  initialProductState,
  productReducer,
  ProductState,
} from './product.reducer';
import {
  fetchProductsFailed,
  fetchProductsSuccess,
  loadingProducts,
} from './product.action';
import productService from '../../../services/product.service';

export interface ProductContextProps {}

export interface ProductContextOutProps extends ProductState {
  loadProducts: () => void;
}

export interface WithProductContextProps {
  productCtx: ProductContextOutProps;
}

const ProductContext = React.createContext<ProductContextOutProps>(null as any);

const ProductProvider: React.FC<ProductContextProps> = ({ children }) => {
  const [productState, dispatch] = useReducer(
    productReducer,
    initialProductState,
  );

  const loadProducts = async () => {
    dispatch(loadingProducts());
    const products = await productService.getProducts();
    if (products.length > 0) {
      dispatch(fetchProductsSuccess(products));
    } else {
      dispatch(fetchProductsFailed());
    }
  };

  return (
    <ProductContext.Provider
      value={{
        ...productState,
        loadProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export type ExcludeProductProps<P> = Pick<
  P,
  Exclude<keyof P, keyof WithProductContextProps>
>;

const withProduct = <WCProps,>(
  WrappedComponent: React.ComponentType<WCProps & WithProductContextProps>,
): React.ComponentType<
  ExcludeProductProps<WCProps & WithProductContextProps>
> => {
  const Component = (props: any) => {
    const productCtx = useContext(ProductContext);
    return <WrappedComponent {...props} productCtx={productCtx} />;
  };
  if (process.env.NODE_ENV !== 'production') {
    const name =
      WrappedComponent.displayName || WrappedComponent.name || 'Unknown';
    Component.displayName = `withProduct(${name})`;
  }
  return Component;
};

export { ProductProvider, withProduct };
