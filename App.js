import Navbar from "./companents/navabar"
import Searchbar from "./companents/searchbar"
import Product from "./companents/product"
import About from "./companents/About"
import Footer from "./companents/footer"

function App()
{
    return(
 <div>
       <Navbar></Navbar>
    <Searchbar></Searchbar>
    <Product></Product>
    <About></About>
    <Footer></Footer>
    </div>
    )
   
}

export default App