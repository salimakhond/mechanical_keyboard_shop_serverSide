import { TProduct } from '../product/product.interface';

export type TOrder = {
  userDetails: {
    name: string;
    email: string;
    phone: string;
    address: string;
    paymentMethod: string;
  };
  cartItems: TProduct[];
};
