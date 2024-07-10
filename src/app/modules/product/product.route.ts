import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { productValidation } from './product.validation';
import { ProductControllers } from './product.controller';

const router = express.Router();

// Create Product Route
router.post(
  '/create-product',
  validateRequest(productValidation.productValidationSchema),
  ProductControllers.createProduct,
);

// Get Product Route
router.get('/', ProductControllers.getAllProduct);

export const ProductRoute = router;
