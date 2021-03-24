import React, { useEffect, useState } from 'react';
import { Grid, Snackbar } from '@material-ui/core';
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

const ProductsPage: React.FC<ProductsPageProps> = ({
  setBusy,
  cartCtx: { addToCart, loadCart },
  productCtx: { isLoading, loadProducts, products },
}) => {
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
      {products && products.length > 0 ? (
        <Grid container spacing={2}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
              <ProductPod {...product} onAddProduct={handleAddProduct} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>No products found</div>
      )}
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
