import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(1, 0),
    fontWeight: 'inherit',
  },
}));

const CartSummaryItem: React.FC<{ name: string; value: number }> = ({
  name,
  value,
}) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div>{name}</div>
      <div>₹ {value}</div>
    </div>
  );
};

export default CartSummaryItem;
