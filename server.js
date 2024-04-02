import express from 'express';

const server = express();

server.get('/', (req, res) => {
    res.send('Welcome to E-commerce APIs.')
})

server.listen(5500, () => {
    console.log('Server is up and running on Port: 5500');
})