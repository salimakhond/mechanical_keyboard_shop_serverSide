import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { productValidation } from './product.validation';
import { ProductControllers } from './product.controller';

const router = express.Router();

// Create Product Route
router.post(
  '/',
  validateRequest(productValidation.productValidationSchema),
  ProductControllers.createProduct,
);

// Get All Product Route
router.get('/', ProductControllers.getAllProduct);

// Get Single Product Route
router.get('/:id', ProductControllers.getSingleProduct);

// Update Product Route
router.patch('/:id', ProductControllers.updateProduct);

// Delete Product Route
router.delete('/:id', ProductControllers.deleteProduct);

export const ProductRoute = router;
