function products(product){
 const db = [...product]

function printproducts(){
    const productsDOM = document.querySelector(".products_container")
    let htmlproduct = ""

    for(let product of db){
        htmlproduct += `
        <article class="product">
        <div class="product_image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product_content">
            <button type="button" class="product_btn add_to_cart" data-id=${product.id}>
                <i class='bx bx-cart-add'></i>
            </button>
            <span class="product_price">$${product.price}</span>
            <span class="product_stock">${product.quantity}</span>
            <h3 class="product_title">${product.name}</h3>
        </div>
     </article>`
    }
    productsDOM.innerHTML=htmlproduct
}
    printproducts()

    return{
        db,
        printproducts
    }
}
export default products