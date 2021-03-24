import React from 'react';
import { List, ListItem, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { CartLine } from '../../types/cart-line';
import CartLineListItem from './CartLineListItem';

export interface CartLineListProps {
  cartLines: CartLine[];
}

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  listItem: {
    border: '1px solid #cacaca',
    borderRadius: '3px',
    marginTop: theme.spacing(1),
    '&:first-child': {
      marginTop: 0,
    },
  },
}));

const CartLineList: React.FC<CartLineListProps> = ({ cartLines }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {cartLines.map(cartLine => (
          <ListItem key={cartLine._id} className={clsx(classes.listItem)}>
            <CartLineListItem {...cartLine} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CartLineList;
