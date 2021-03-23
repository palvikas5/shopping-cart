import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
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
