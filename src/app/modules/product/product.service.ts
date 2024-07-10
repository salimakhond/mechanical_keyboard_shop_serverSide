import { TProduct } from './product.interface';
import { Product } from './product.model';

// Create Product Service
const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
