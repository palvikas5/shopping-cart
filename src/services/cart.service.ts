import { httpService } from '../utils/http.service';
import { Cart } from '../types/cart';
import { Product } from '../types/product';

const getCartById = async (cartId: string): Promise<Cart | undefined> => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/carts/${cartId}`;
  const { data } = await httpService<Cart>(url);
  return data;
};

const createCart = async (productId: Product['_id'], quantity: number) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/carts`;
  const { data } = await httpService<Cart>(url, {
    method: 'POST',
    body: JSON.stringify({ products: [{ id: productId, quantity }] }),
  });
  return data;
};

const addItemToExistingCart = async (
  cartId: string,
  productId: Product['_id'],
  quantity: number,
) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/carts/${cartId}`;
  const { data } = await httpService<Cart>(url, {
    method: 'POST',
    body: JSON.stringify({ id: productId, quantity }),
  });
  return data;
};

const updateProductQuantity = async (
  cartId: string,
  cartLineId: string,
  newQuantity: number,
) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/carts/${cartId}/cart-lines/${cartLineId}`;
  const { data } = await httpService<Cart>(url, {
    method: 'PATCH',
    body: JSON.stringify({ quantity: newQuantity }),
  });
  return data;
};

const addToCart = async (productId: Product['_id'], quantity: number) => {
  const cartId = localStorage.getItem('cartId');

  const response = cartId
    ? await addItemToExistingCart(cartId, productId, quantity)
    : await createCart(productId, quantity);

  if (response && response._id) {
    localStorage.setItem('cartId', response._id);
  }
  return response;
};

const cartService = {
  getCartById,
  addToCart,
  updateProductQuantity,
};

export default cartService;
