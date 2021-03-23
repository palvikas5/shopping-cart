import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { MinusCircle, PlusCircle } from 'react-feather';

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 80,
  },
}));

export interface QuantityProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const Quantity: React.FC<QuantityProps> = ({ quantity, onQuantityChange }) => {
  const classes = useStyles();

  const handleQuantityChange = (isIncrement: boolean) => () => {
    if (isIncrement) {
      onQuantityChange(quantity + 1);
    } else if (!isIncrement && quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className={clsx(classes.root)}>
      <MinusCircle color="#C7C7CC" onClick={handleQuantityChange(false)} />
      <div>{quantity}</div>
      <PlusCircle color="#C7C7CC" onClick={handleQuantityChange(true)} />
    </div>
  );
};

export default Quantity;
