import React from 'react';
import { makeStyles } from '@material-ui/core';
import { CartSummary } from '../../types/cart-summary';
import CartSummaryItem from './CartSummaryItem';

export interface CartSummaryProps extends CartSummary {}

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
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
    <div className={classes.root}>
      <h4>Summary</h4>
      <div className={classes.summary}>
        <CartSummaryItem name="Subtotal" value={subTotal} />
        <CartSummaryItem name="Discount total" value={totalDiscount} />
        <b>
          <CartSummaryItem name="Total Price" value={totalPrice} />
        </b>
      </div>
    </div>
  );
};

export default CartSummaryComponent;
