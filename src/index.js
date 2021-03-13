import { Cart } from './cart/cart.js';
import { Catalog } from './catalog/catalog.js'
import { Product } from './products/product.js'

let productsListing = document.getElementById("product-listing");
let cartsTable = document.getElementById("cart_listing");
/**
 * Create some products 
 */
 // let product1 = new Product({
 //    name: 'Lucky Dube Reggae Album 1',
 //    price: 69
 // })

 let product1 = new Product({
    name: "Samsung Series 4",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    actualPrice: 13999,
    displayPrice: 22500,
    discount: 37
 })
 let product2 = new Product({
    name: "Samsung Series 6",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    actualPrice: 35999,
    displayPrice: 66900,
    discount: 46
 })
 let product3 = new Product({
    name: "Samsung The Frame",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    actualPrice: 84999,
    displayPrice: 133900,
    discount: 36
 })
 let product4 = new Product({
    name: "Thomson B9 Pro",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    actualPrice: 9999,
    displayPrice: 16999,
    discount: 41
 })
let product5 = new Product({
    name: "LG Ultra HD",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    actualPrice: 39990,
    displayPrice: 79990,
    discount: 50
 })
 let product6 = new Product({
    name: "Vu Ready LED TV",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    actualPrice: 7999,
    displayPrice: 17000,
    discount: 52
 })
 let product7 = new Product({
    name: "Koryo Android TV",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    actualPrice: 55999,
    displayPrice: 19999,
    discount: 71
 })
 let product8 = new Product({
    name: "Micromax LED Smart",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    actualPrice: 9999,
    displayPrice: 27990,
    discount: 64
 })

 
let catalog = new Catalog([product1, product2, product3, product4, product5, product6, product7, product8])

let cart = new Cart(catalog)
function addCart(){
    var pdtId = event.srcElement.id
    cart.addItem(pdtId)
    var name = cart.catalog.products.find(pdt => {
                return pdt.id == pdtId 
            }).name
    document.getElementById("cart-added").innerHTML = name + " added to cart";
    document.getElementById("cart-added").style.display = "block";
    renderCarts(cart.items);
}
function addItem(){
    var pdtId = (event.srcElement.id).replace("add", "")
    cart.addItem(pdtId)
    var name = cart.catalog.products.find(pdt => {
                return pdt.id == pdtId 
            }).name
    document.getElementById("cart-added").innerHTML = name + " added to cart";
    document.getElementById("cart-added").style.display = "block";
    renderCarts(cart.items);
}
function removeItem(){
    var pdtId = (event.srcElement.id).replace("remove", "")
    cart.removeItem(pdtId)
    renderCarts(cart.items);
}
function deleteItem(){
    var pdtId = (event.srcElement.id).replace("delete", "")
    cart.deleteItem(pdtId)
    renderCarts(cart.items);
}

console.log(cart.catalog.products[0])
function renderProducts(cart2) {
    for (var Product of cart2) {
        let dv = document.createElement('div');
        dv.classList.add("product")
        dv.innerHTML = `<img src="${ Product.image }" class="thumbnail">
                    <span class="discount">${ Product.discount }% Off</span>
                    <div class="details">
                        <div class="product-info">
                            <div class="name">${ Product.name }</div>
                            <div class="price"><strike>${ Product.actualPrice }</strike> ${ Product.displayPrice }</div>
                            <span id="${ Product.id }" class="add_cart">Add to Cart</span>
                        </div>
                    </div>`;

        productsListing.appendChild(dv);
       document.getElementById(Product.id).addEventListener("click", function(){addCart()});    
   }

}

cart.addItem(product1.id, 10)
cart.addItem(product2.id, 2)
function renderCarts(e) {
    cartsTable.innerHTML="";
    var totalItem = 0;
    var totalPrice = 0;
    var totalDiscount = 0
    var orderTotal = 0
    for (let item of Object.keys(cart.items)) {
        //console.log(item)
        let dv = document.createElement('div');
        dv.classList.add("cart_item")
        var product = cart.catalog.products.find(pdt => {
                return pdt.id == item 
            })
        var itemCount = cart.items[item]
        totalItem = totalItem + itemCount
        totalPrice = totalPrice + (product.displayPrice * itemCount)
        totalDiscount = totalDiscount + (product.displayPrice - product.actualPrice)  * itemCount
        orderTotal = orderTotal + (product.actualPrice * itemCount)
        var removeId = "remove"+product.id;
        var addId = "add"+product.id;
        var deleteId = "delete"+product.id;
        dv.innerHTML = `<div class="item_details">
                        <img src="${ product.image }" class="thumbnail">
                        <div class="name">${ product.name }</div>
                        <span class="deleteId" id="${ deleteId }" >X</span> 
                    </div>
                    <div class="items_quantity">
                        <input id="${ removeId }" type="button" value="-" class="button-minus" data-field="input_quantity">
                        <span name="input_quantity" class="input_quantity" id="item_quantity" >${ itemCount }</span> 
                        <input id="${ addId }" type="button" value="+" class="button-plus" data-field="input_quantity">
                    </div>
                    <div class="items_price">${ product.displayPrice * itemCount }</div>`;
        cartsTable.appendChild(dv);
        document.getElementById(removeId).addEventListener("click", function(){removeItem()});  
        document.getElementById(addId).addEventListener("click", function(){addItem()}); 
        document.getElementById(deleteId).addEventListener("click", function(){deleteItem()});
    }
    document.getElementById("items_count").innerHTML= "Items ("+ totalItem +")";
    document.getElementById("items_counts").innerHTML= "Items ("+ totalItem +")";
    document.getElementById("totalPrice").innerHTML= "$ ("+ totalPrice +")";
    document.getElementById("totalDiscount").innerHTML= "$ ("+ totalDiscount +")";
    document.getElementById("orderTotal").innerHTML= "$ ("+ orderTotal +")";
  
}

renderCarts(cart.items);

console.log(cart.catalog.products)
//console.log("catalog" + catalog.getProducts())
renderProducts(catalog.getProducts()) 
