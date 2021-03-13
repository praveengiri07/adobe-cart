export class Product {

    constructor(product) {
        this.id = Math.random().toString(36).substring(7)
        this.name = product.name 
        this.image = product.image
        this.actualPrice = product.actualPrice 
        this.displayPrice = product.displayPrice 
        this.discount = product.discount 
        //console.log (items)
    }

}


//module.exports = Product 