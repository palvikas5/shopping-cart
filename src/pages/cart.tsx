import React, { useEffect, useState } from 'react';
import CartLineList from '../components/cart/CartLineList';
import { Cart } from '../types/cart';
import EmptyCart from '../components/cart/EmptyCart';
import cartService from '../services/cart.service';

const CartPage = () => {
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    cartService.getCartById('6056eaaa9b1e24c0390c1f0a').then(cartResponse => {
      setCart(cartResponse);
    });
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {!cart ? (
        <EmptyCart />
      ) : (
        <div>
          <CartLineList cartLines={cart.cartLines} />
        </div>
      )}
    </div>
  );
};

export default CartPage;
