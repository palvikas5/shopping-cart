import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { CartLine } from '../../types/cart-line';
import Quantity from './Quantity';

export interface CartLineListItemProps extends CartLine {}

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  imageAndName: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  quantityAndPrice: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
  },
  image: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  name: {
    flex: 1,
    fontSize: '1rem',
    fontWeight: theme.typography.fontWeightMedium,
    marginLeft: theme.spacing(1),
  },
  price: {
    fontSize: '1rem',
  },
  discountPrice: {
    fontSize: '1rem',
    color: 'green',
    fontWeight: theme.typography.fontWeightMedium,
  },
  itemPricePanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
}));

const CartLineListItem: React.FC<CartLineListItemProps> = ({
  product,
  quantity,
  itemPrice,
  itemDiscount,
  itemTotal,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageAndName}>
        <Avatar
          variant="rounded"
          src="https://via.placeholder.com/100"
          className={classes.image}
        />
        <div className={clsx(classes.name)}>{product.name}</div>
        <div className={clsx(classes.price)}>₹ {product.price}</div>
      </div>
      <div className={classes.quantityAndPrice}>
        <Quantity quantity={quantity} />
        <div className={classes.itemPricePanel}>
          <div className={clsx(classes.price)}>₹ {itemPrice}</div>
          {itemDiscount > 0 && (
            <div className={clsx(classes.discountPrice)}>
              Discount ₹ {itemDiscount}
            </div>
          )}
          <div className={clsx(classes.price)}>₹ {itemTotal}</div>
        </div>
      </div>
    </div>
  );
};

export default CartLineListItem;
