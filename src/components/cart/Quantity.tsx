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

const Quantity = () => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root)}>
      <MinusCircle color="#C7C7CC" />
      <div>1</div>
      <PlusCircle color="#C7C7CC" />
    </div>
  );
};

export default Quantity;
