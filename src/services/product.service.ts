import { httpService } from '../utils/http.service';
import { Product } from '../types/product';

const getProducts = async (): Promise<Product[]> => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/products`;
  const response = await httpService<{ data: Product[] }>(url);
  const { data: products = [] } = response.data || {};
  return products;
};

const productService = {
  getProducts,
};

export default productService;
