import express from 'express';
import CartController from './cartitems.controller.js';

const cartRouter = express.Router();
const cartController = new CartController();

cartRouter.post('/', cartController.add);


export default cartRouter;