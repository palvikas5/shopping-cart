const getCartById = async (cartId: string) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/carts/${cartId}`;
  const response = await fetch(url);
  return response.json();
};

const cartService = {
  getCartById,
};

export default cartService;
