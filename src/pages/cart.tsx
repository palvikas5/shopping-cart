import React, { useEffect } from 'react';
import CartLineList from '../components/cart/CartLineList';
import EmptyCart from '../components/cart/EmptyCart';
import {
  withCart,
  WithCartContextProps,
} from '../components/cart/cart-context/CartContext';
import CartSummary from '../components/cart/CartSummary';
import withLoader, { WithLoaderProps } from '../components/loader/withLoader';

export interface CartPageProps extends WithCartContextProps, WithLoaderProps {}

const CartPage: React.FC<CartPageProps> = ({
  cartCtx: { isLoading, cart, loadCart },
  setBusy,
}) => {
  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    setBusy(isLoading);
  }, [isLoading]);

  return (
    <div>
      <h1>Cart</h1>
      {!cart ? (
        <EmptyCart />
      ) : (
        <div>
          <CartLineList cartLines={cart.cartLines} />
          <CartSummary {...cart.summary} />
        </div>
      )}
    </div>
  );
};

export default withCart(withLoader(CartPage));
