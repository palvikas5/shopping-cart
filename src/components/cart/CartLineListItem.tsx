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
}));

const CartLineListItem: React.FC<CartLineListItemProps> = ({ product }) => {
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
      </div>
      <div className={classes.quantityAndPrice}>
        <Quantity />
        <div className={clsx(classes.price)}>₹ {product.price}</div>
      </div>
    </div>
  );
};

export default CartLineListItem;
