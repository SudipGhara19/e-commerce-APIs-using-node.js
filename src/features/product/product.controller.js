import ProductModel from "./product.model.js";

export default class ProductController{
    getAllProducts(req, res){
        const products = ProductModel.getAll();
        res.status(200).send(products);
    }

    addProduct(req, res){
        console.log(req.body);
        console.log('this is a post request');
        res.status(200).send('POST request received');
    }

    rateProduct(req, res){}

    getOneProduct(req, res){}
}