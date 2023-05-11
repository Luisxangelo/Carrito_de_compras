function cart( db, printproducts){
    let cart=[];
//elementos del Doom
    const productsDOM= document.querySelector(".products_container")
    const notifyDom = document.querySelector(".notify")
    const cartDom = document.querySelector(".cart_body")
    const countDom = document.querySelector(".cart_count_item")
    const totalDom = document.querySelector(".cart_total_item")
    const checkOut = document.querySelector(".btn_buy")



    function printcart(){
        let htmlcart= ""

        if(cart.length === 0 ){
            htmlcart+=` 
            <div class="cart_empty">
            <i class="bx bx-cart"></i>
            <p class="cart_empty_text">No hay productos en el carrito</p>
             </div>
        `
            notifyDom.classList.remove("show_notify")
        }else{
            for(const item of cart){
                const product = db.find ( p=> p.id === item.id)
                htmlcart += `
                <article class="article">
                <div class="article_image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="article_content">
                    <h3 class="article_title">${product.name}</h3>
                    <span class="article_price">$${product.price}</span>
                    <div class="article_quantity">
                        <button type="button" class="article_quantity_btn article_minus">
                            <i class="bx bx-minus" data.id="${item.id}"></i>
                        </button>
                        <span class="article_quantity_text">${item.qty}</span>
                        <button type="button" class="article_quantity_btn article_plus">
                            <i class="bx bx-plus" data.id="${item.id}></i>
                        </button>
                    </div>
                    <button type="button" class="article_btn remove_from_cart">
                        <i class="bx bx-trash data.id="${item.id}"></i>
                    </button>
                </div>
            </article>
                `
            }
            notifyDom.classList.add("show_notify")
        }

        cartDom.innerHTML = htmlcart
        notifyDom.innerHTML =showitemcounts()
        countDom.innerHTML = showitemcounts()
        totalDom.innerHTML = showtotal()
    }

    function addtocart(id , qty = 1){
        const itemfinded = cart.find(i => i.id === id)
        if(itemfinded)  {
            itemfinded.qty += qty
        }else{
            cart.push({id, qty})
        }
        printcart()
    }

    function removefromcart(id , qty =1){
        const itemfinded = cart.find(i => i.id === id)
        const result = itemfinded.qty - qty
        if(result > 0){
            itemfinded.qty -= qty
        }else{
            cart= cart.filter(i => i.id !== id)
        }
        printcart()
    }

    function deletefromcart(id){
        cart=cart.filter(i => i.id !== id)    
        printcart()
    }
    
    function showitemcounts(){

        let suma =0
        for(const item of cart){
            suma += item.qty
        }
        return suma
    }

    function showtotal(){
        let total = 0
        for(const item of cart){
         const productfinde = db.find( p => p.id === item.id)
        total += item.qty * productfinde.price
        }
        return total
    }
    function checkout(){
        for(const item of cart){
            const productfinded = db.find(p=> p.id === item.id)

            productfinded.quantity -= item.qty
        }
    }

    printcart()
    //eventos

    productsDOM.addEventListener("click", function(e){
        if(e.target.closest(".add_to_cart")){
            const id = +e.target.closest(".add_to_cart").dataset.id
            addtocart(id)
        }
    })
    cartDom.addEventListener("click", function(e){
        if(e.target.closest(".article_minus")){
            const id = +e.target.closest(".article_minus").dataset.id
            removefromcart(id)
        }
        if(e.target.closest(".article_plus")){
            const id = +e.target.closest(".article_plus").dataset.id
            addtocart(id)
        }
        if(e.target.closest(".removefromcart")){
            const id = +e.target.closest(".removefromcart").dataset.id
            deletefromcart(id)
        }
    })
}
export default cart