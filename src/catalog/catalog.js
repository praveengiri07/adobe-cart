import { Product } from './../products/product.js'
export class Catalog {
    constructor(product) {
        this.products = product 
  //       fetch("./src/products/product.json")
		// .then(response => {
		//    return response.json();
		// })
		// .then(data => {
		//     //console.log(data.items[0])
		//     for(var i = 0; i < data.items.length; i++)
		//     {
		//        //console.log(data.items[i].name) 
		//        let product3 = new Product({
		//             name: data.items[i].name, 
		//             image: data.items[i].image,
		//             actualPrice: data.items[i].price.actual, 
		//             displayPrice: data.items[i].price.display, 
		//             discount: data.items[i].discount 
		//         })
		//        //this.products = this.products.concate(products) 
		//        this.products.push(product3)

		//     //cart.addItem(product3.id)
		//     }
		// });
    }

    addProduct(product) {
        this.products[this.products.length] = product
        //this.products.push(product)
    }
    getProducts() {
        return this.products
    }
}

//module.exports = Catalog 