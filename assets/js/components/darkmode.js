function theme (){

const themebuttom = document.getElementById("theme")
const icon = themebuttom.firstElementChild

function fn(){

}

themebuttom.addEventListener("click", function(fn){
    document.body.classList.toggle("dark")

    if(document.body.classList.contains("dark")){
        icon.classList.add("bx-sun")
        icon.classList.remove("bxs-moon")
        localStorage.setItem("theme","dark")
     
    }else
    icon.classList.add("bxs-moon")
    icon.classList.remove("bxs-sun")
    localStorage.removeItem("theme")
   
})
}

export default theme