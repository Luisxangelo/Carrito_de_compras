function show_cart(){
    const btncart=  document.querySelector('.btn_cart')
    const cart=  document.querySelector('.cart')

    btncart.addEventListener('click', function(e){
        cart.classList.toggle("show_cart")
    })

    cart.addEventListener('click', function(e){

        if(e.target.closest(".btn_close")){
            cart.classList.remove("show_cart")
        }
    })
}
export default show_cart;