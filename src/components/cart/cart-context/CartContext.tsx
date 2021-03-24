import React, { useContext, useReducer } from 'react';
import { cartReducer, CartState, initialCartState } from './cart.reducer';
import {
  addProductFailed,
  addProductSuccess,
  fetchCartFailed,
  fetchCartSuccess,
  loadingCart,
  updateQuantityFailed,
  updateQuantitySuccess,
} from './cart.action';
import cartService from '../../../services/cart.service';
import { getCartId, removeCartId } from '../../../utils/cart.helper';
import { Product } from '../../../types/product';
import { CartLine } from '../../../types/cart-line';

export interface CartContextProps {}

export interface CartContextOutProps extends CartState {
  loadCart: () => void;
  addToCart: (productId: Product['_id'], quantity?: number) => void;
  updateQuantity: (cartLineId: CartLine['_id'], newQuantity: number) => void;
}

export interface WithCartContextProps {
  cartCtx: CartContextOutProps;
}

const CartContext = React.createContext<CartContextOutProps>(null as any);

const CartProvider: React.FC<CartContextProps> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  const loadCart = async () => {
    const cartId = getCartId();
    if (cartId) {
      dispatch(loadingCart());
      const cart = await cartService.getCartById(cartId);
      if (cart) {
        dispatch(fetchCartSuccess(cart));
      } else {
        removeCartId();
        dispatch(fetchCartFailed());
      }
    }
  };

  const addToCart = async (productId: Product['_id'], quantity = 1) => {
    dispatch(loadingCart());
    const cart = await cartService.addToCart(productId, quantity);
    if (cart) {
      dispatch(addProductSuccess(cart));
    } else {
      dispatch(addProductFailed());
    }
  };

  const updateQuantity = async (
    cartLineId: CartLine['_id'],
    newQuantity: number,
  ) => {
    const cartId = getCartId();
    if (cartId) {
      dispatch(loadingCart());
      const cart = await cartService.updateProductQuantity(
        cartId,
        cartLineId,
        newQuantity,
      );
      if (cart) {
        dispatch(updateQuantitySuccess(cart));
      } else {
        dispatch(updateQuantityFailed());
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...cartState,
        loadCart,
        addToCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export type ExcludeCartProps<P> = Pick<
  P,
  Exclude<keyof P, keyof WithCartContextProps>
>;

const withCart = <WCProps,>(
  WrappedComponent: React.ComponentType<WCProps & WithCartContextProps>,
): React.ComponentType<ExcludeCartProps<WCProps & WithCartContextProps>> => {
  const Component = (props: any) => {
    const appCtx = useContext(CartContext);
    return <WrappedComponent {...props} cartCtx={appCtx} />;
  };
  if (process.env.NODE_ENV !== 'production') {
    const name =
      WrappedComponent.displayName || WrappedComponent.name || 'Unknown';
    Component.displayName = `withCart(${name})`;
  }
  return Component;
};

export { CartProvider, withCart };
