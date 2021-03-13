import { Product } from './../products/product.js'
export class Catalog {
    constructor(product) {
        this.products = product 
    }

    addProduct(product) {
        this.products[this.products.length] = product
    }
    getProducts() {
        return this.products
    }
}
