import React from 'react';
import { makeStyles } from '@material-ui/core';
import { CartSummary } from '../../types/cart-summary';
import CartSummaryItem from './CartSummaryItem';

export interface CartSummaryProps extends CartSummary {}

const useStyles = makeStyles(theme => ({
  summary: {
    marginBottom: theme.spacing(2),
  },
}));

const CartSummaryComponent: React.FC<CartSummaryProps> = ({
  subTotal,
  totalDiscount,
  totalPrice,
}) => {
  const classes = useStyles();

  return (
    <>
      <h4>Summary</h4>
      <div className={classes.summary}>
        <CartSummaryItem name="Subtotal" value={subTotal} />
        <CartSummaryItem name="Discount total" value={totalDiscount} />
        <CartSummaryItem name="Total Price" value={totalPrice} />
      </div>
    </>
  );
};

export default CartSummaryComponent;
