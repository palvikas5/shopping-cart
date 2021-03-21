import React from 'react';
import { List, ListItem, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { CartLine } from '../../types/cart-line';
import CartLineListItem from './CartLineListItem';

export interface CartLineListProps {
  cartLines: CartLine[];
}

const useStyles = makeStyles(() => ({
  root: {
    border: '1px solid',
    borderRadius: '3px',
  },
}));

const CartLineList: React.FC<CartLineListProps> = ({ cartLines }) => {
  const classes = useStyles();

  return (
    <div>
      <List>
        {cartLines.map(cartLine => (
          <ListItem key={cartLine._id} className={clsx(classes.root)}>
            <CartLineListItem {...cartLine} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CartLineList;
