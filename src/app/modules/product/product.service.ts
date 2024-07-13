import { TProduct } from './product.interface';
import { Product } from './product.model';

// Create Product Service
const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

// Get All Product Service
const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const { searchTerm, sort } = query;

  //searching
  const searchableFields = ['name', 'brand'];
  let searchQuery;

  if (searchTerm) {
    searchQuery = Product.find({
      $or: searchableFields.map((field) => ({
        [field]: { $regex: searchTerm as string, $options: 'i' },
      })),
    });
  } else {
    searchQuery = Product.find();
  }

  //sorting
  let sortOptions = {};
  if (sort === 'priceLowToHigh') {
    sortOptions = { price: 1 };
  } else if (sort === 'priceHighToLow') {
    sortOptions = { price: -1 };
  }

  const result = await searchQuery.sort(sortOptions).exec();

  // searching result in no products
  if (searchTerm && result.length === 0) {
    throw new Error(`No products found '${searchTerm}'.`);
  }

  return result;
};

// Get Single Service
const getSingleProductFromDB = async (ProductID: string) => {
  const result = await Product.findById(ProductID);
  return result;
};

// Update Product Service
const updateProductIntoDB = async (
  productId: string,
  product: Partial<TProduct>,
) => {
  const result = await Product.findByIdAndUpdate(
    productId,
    { $set: product },
    {
      new: true,
    },
  );
  return result;
};

// Delete Product Service
const deleteProductFromDB = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
