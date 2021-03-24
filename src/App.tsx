import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CartPage from './pages/cart';
import ProductsPage from './pages/products';
import Header from './components/header/Header';
import { CartProvider } from './components/cart/cart-context/CartContext';
import { ProductProvider } from './components/product/product-context/ProductContext';

const useStyles = makeStyles(() => ({
  main: {
    marginTop: 76,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <CartProvider>
        <Container maxWidth="md">
          <Header />
          <main className={classes.main}>
            <ProductProvider>
              <Switch>
                <Route path="/products" component={ProductsPage} />
                <Route path="/" component={ProductsPage} exact />
              </Switch>
            </ProductProvider>

            <Switch>
              <Route path="/cart" component={CartPage} />
            </Switch>
          </main>
        </Container>
      </CartProvider>
    </Router>
  );
}

export default App;
