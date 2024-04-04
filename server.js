import express from 'express';
import ProductRouter from './src/features/product/product.routes.js';

const server = express();

// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use('/api/products', ProductRouter);

//default request handeler
server.get('/', (req, res) => {
    res.send('Welcome to E-commerce APIs.')
})



server.listen(5500, () => {
    console.log('Server is up and running on Port: 5500');
})