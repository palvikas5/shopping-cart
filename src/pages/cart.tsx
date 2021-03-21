import React, { useState } from 'react';
import CartLineList from '../components/cart/CartLineList';
import { Cart } from '../types/cart';
import EmptyCart from '../components/cart/EmptyCart';

const cartMock: Cart = {
  _id: 'cart-id',
  cartLines: [
    {
      _id: 'cartline1',
      product: {
        _id: 'p1',
        name: 'Chair',
        price: 300,
      },
      quantity: 2,
      itemPrice: 600,
      itemDiscount: 50,
      itemTotal: 550,
    },
  ],
  summary: {
    subTotal: 600,
    discountTotal: 50,
    totalPrice: 550,
  },
};

const CartPage = () => {
  const [cart] = useState<Cart | null>(cartMock);

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
