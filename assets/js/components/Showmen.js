function showmenu(){
    const nav=  document.querySelector('.nav')
    const menu=  document.querySelector('.nav_menu')

    nav.addEventListener('click', function(e){
        if(e.target.closest(".btn_menu")){
            menu.classList.toggle("showmenu")
        }
        if(e.target.closest(".btn_close")){
            menu.classList.remove("showmenu")
        }
        if(e.target.closest(".nav_link")){
            menu.classList.remove("showmenu")
        }
    })
}
export default showmenu;