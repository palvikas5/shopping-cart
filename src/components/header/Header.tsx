import React from 'react';
import { ShoppingCart } from 'react-feather';
import {
  AppBar,
  Badge,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  withCart,
  WithCartContextProps,
} from '../cart/cart-context/CartContext';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
  },
  title: {
    flex: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
  },
}));

export interface HeaderProps extends WithCartContextProps {}

const Header: React.FC<HeaderProps> = ({ cartCtx: { totalItems } }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar className={classes.toolbar}>
        <Link to="/" className={clsx(classes.link, classes.title)}>
          <IconButton color="inherit">
            <Typography variant="h6" noWrap>
              Shopping Cart
            </Typography>
          </IconButton>
        </Link>

        <Link to="/cart" className={classes.link}>
          <IconButton color="inherit">
            <Badge badgeContent={totalItems} showZero color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default withCart(Header);
