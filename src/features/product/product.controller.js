import ProductModel from "./product.model.js";

export default class ProductController{

    getAllProducts(req,res){
        const products = ProductModel.getAll();
        res.status(200).send(products);
    }

    addProduct(req, res){
        const {name, price, sizes, desc, category} = req.body;
        const newProduct = {
            name,
            price:parseFloat(price),
            sizes:sizes.split(','),
            imageUrl: req.file.filename,
            desc,
            category
        };
        const createdRecord=ProductModel.add(newProduct);
        res.status(201).send(createdRecord);
    }

    rateProduct(req,res){
        const userID = req.query.userID;
        const productID = req.query.productID;
        const rating = req.queryfd.rating;

        try{
            ProductModel.rateProduct(userID, productID, rating);
        }catch(err){
            return res.status(400).send(err.message);
        }
        
        return res.status(200).send("Rating send succefully!");
        
    }

    getOneProduct(req,res){
        const id = req.params.id;
        const product = ProductModel.get(id);
        if(!product){
            return res.status(404).send('Product not found.')
        }else{
            return res.status(200).send(product);
        }
    }

    filterProducts(req, res){
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const category = req.query.category;
        const result = ProductModel.filter(
            minPrice,
            maxPrice,
            category
        );
        res.status(200).send(result);
    }

}