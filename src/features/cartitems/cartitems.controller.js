import CartModel from "./cartitems.model.js";


export default class CartController {

    add(req, res) {
        const {productID, quantity} = req.query;
        const userID = req.userID;

        CartModel.add(productID, userID, quantity);
        res.status(201).send("Cart is updated.");
    }

}