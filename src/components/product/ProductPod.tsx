import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  makeStyles,
} from '@material-ui/core';
import { Product } from '../../types/product';

export interface ProductPodProps extends Product {
  onAddProduct: (id: string) => void;
}

const useStyles = makeStyles(() => ({
  image: {
    width: 100,
    height: 100,
  },
}));

const ProductPod: React.FC<ProductPodProps> = ({
  _id,
  name,
  price,
  onAddProduct,
}) => {
  const classes = useStyles();

  const handleAddProduct = () => {
    onAddProduct(_id);
  };

  return (
    <Card>
      <CardContent>
        <Avatar
          variant="rounded"
          src="https://via.placeholder.com/100"
          className={classes.image}
        />
        <div>{name}</div>
        <div>₹ {price}</div>
        <Button variant="contained" color="primary" onClick={handleAddProduct}>
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductPod;
