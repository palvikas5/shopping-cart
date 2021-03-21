const getCartById = async (cartId: string) => {
  const url = `http://localhost:4444/carts/${cartId}`;
  const response = await fetch(url);
  return response.json();
};

const cartService = {
  getCartById,
};

export default cartService;
