import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Product } from '../../types/product';

export interface ProductPodProps extends Product {
  onAddProduct: (id: string) => void;
}

const useStyles = makeStyles(() => ({
  image: {
    height: 140,
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
      <CardActionArea>
        <CardMedia
          className={classes.image}
          image="https://via.placeholder.com/180"
          title={name}
        />
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ₹ {price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={handleAddProduct}
          fullWidth
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductPod;
