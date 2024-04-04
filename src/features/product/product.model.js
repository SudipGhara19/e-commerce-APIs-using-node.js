export default class ProductModel{
    constructor(id, name, desc, imageUrl, category, price, sizes){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.imageUrl = imageUrl;
        this.category = category;
        this.price = price;
        this.sizes = sizes;
    }

    // get all the products
    static getAll(){
        return products;
    }

    // to add a item
    static add(product){
        product.id = products.length + 1;
        products.push(product);
        return product;
    }
}

const products = [
    new ProductModel(
        1,
        'Product 1',
        'Description for product 1',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgQVi2Iyctb8rJG2vkQ5ERNC78mqkReWqsw&s',
        'Electronics',
        200,

    ),

    new ProductModel(
        2,
        'Product 2',
        'Description for product 2',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVEUwFgQDmWswWCUVfD3tlNnobi76x4zmbUg&s',
        'T-shirt',
        99,
        ['S', 'M', 'L', 'XL']
    ),

    new ProductModel(
        3,
        'Product 3',
        'Description for product 3',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaeayXJxpAeK4vemAre6txauSqTndpGBIHg&s',
        'Shirt',
        125,
        ['M', 'L', 'XL']
    )
]