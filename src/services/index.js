const MongoLib = require('../lib/mongo');

class ProductService {
  constructor() {
    debugger
    this.collection = 'products';
    this.mongoDB = new MongoLib();
  }

  async getProducts() {
    const products = await this.mongoDB.getAll(this.collection, {});
    return products || [];
  }

  async createProduct  ({ product }) {
    const createProductId = await this.mongoDB.create(this.collection, product);
    return createProductId;
  }

}

module.exports = ProductService;
