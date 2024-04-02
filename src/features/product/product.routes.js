import express from 'express';
import ProductController from './product.controller';

const ProductRouter = express.Router();
const productController = new ProductController();

ProductRouter.get('/', productController.getAllProducts);
ProductRouter.post('/', productController.addProduct);


export default ProductRouter;

