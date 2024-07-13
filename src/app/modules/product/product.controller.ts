import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

// Create Product Controller
const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product created successfully.',
    data: result,
  });
});

// Get All Product Controller
const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Product retrieved successfully.',
    data: result,
  });
});

// Get Single Product Controller
const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.getSingleProductFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrieved successfully.',
    data: result,
  });
});

// Update Product Controller
const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  // Remove fields with null or empty string values
  Object.keys(product).forEach((key) => {
    if (product[key] === null || product[key] === '') {
      delete product[key];
    }
  });
  const result = await ProductServices.updateProductIntoDB(id, product);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product has been updated successfully',
    data: result,
  });
});

// Delete Product Controller
const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.deleteProductFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
