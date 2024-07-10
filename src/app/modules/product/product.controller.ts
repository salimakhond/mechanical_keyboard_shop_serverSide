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

// Get Product Controller
const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Product retrieved successfully.',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProduct,
};
