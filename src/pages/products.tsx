import React, { useEffect, useState } from 'react';
import { List, ListItem, makeStyles, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import ProductPod from '../components/product/ProductPod';
import withLoader, { WithLoaderProps } from '../components/loader/withLoader';
import {
  withCart,
  WithCartContextProps,
} from '../components/cart/cart-context/CartContext';
import {
  withProduct,
  WithProductContextProps,
} from '../components/product/product-context/ProductContext';

export interface ProductsPageProps
  extends WithLoaderProps,
    WithCartContextProps,
    WithProductContextProps {}

const useStyles = makeStyles(() => ({
  productsList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  productsListItem: {
    flexBasis: '50%',
  },
}));

const ProductsPage: React.FC<ProductsPageProps> = ({
  setBusy,
  cartCtx: { addToCart, loadCart },
  productCtx: { isLoading, loadProducts, products },
}) => {
  const classes = useStyles();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    loadCart();
    loadProducts();
  }, []);

  useEffect(() => {
    setBusy(isLoading);
  }, [isLoading]);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleAddProduct = async (id: string) => {
    setBusy(true);
    handleCloseSnackbar();
    await addToCart(id);
    setBusy(false);
    setSnackbarOpen(true);
  };

  return (
    <div>
      <h1>Products</h1>
      <List className={classes.productsList}>
        {products.map(product => (
          <ListItem
            key={product._id}
            className={classes.productsListItem}
            disableGutters
          >
            <ProductPod {...product} onAddProduct={handleAddProduct} />
          </ListItem>
        ))}
      </List>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Product added to the cart!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default withProduct(withCart(withLoader(ProductsPage)));
