export const getCartId = () => {
  return localStorage.getItem('cartId');
};

export const setCartId = (cartId: string) => {
  return localStorage.setItem('cartId', cartId);
};
