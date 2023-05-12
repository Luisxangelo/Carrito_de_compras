import loader from "./components/loader.js";
import showmenu from "./components/Showmen.js";
import show_cart from "./components/shorcart.js";
import products from "./components/products.js";
import getproducts from "./Helpers/getproducts.js";
import cart from "./components/cart.js";
import theme from "./components/darkmode.js";



loader()
showmenu()
show_cart()


/*end UI elements*/
const {db, printproducts} = products(await getproducts())
cart(db, printproducts)
theme()


