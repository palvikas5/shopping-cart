import React, { useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <Box component="div" flex="1">
              <CartLineList cartLines={cart.cartLines} />
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <CartSummary {...cart.summary} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default withCart(withLoader(CartPage));
