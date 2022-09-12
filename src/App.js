import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartContext } from './CartContext';
import Cart from './components/cart/Cart';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ProductPage from './components/page-product/ProductPage';
import SingleProduct from './components/single-product/SingleProduct';
import { getCart, storeCart } from './helpers';

const App = () => {

    const [ cart, setCart ] = useState({});
    /* fetch from local storage */

    useEffect(() => {
        getCart().then(cart => {
            setCart(JSON.parse(cart));
            
        });

    }, []);

    useEffect(() => {
        storeCart(JSON.stringify(cart));

    }, [cart]);

    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart, setCart }}>
                    <Navbar />

                    <Switch>
                        <Route path="/" component= {Home} exact></Route>
                        {/* <Route path="/about" component= {About}></Route> */}
                        <Route path="/page-product" component= { ProductPage }></Route>
                        <Route path="/cart" component= {Cart}></Route>
                        <Route path="/products/:_id" exact component= {SingleProduct}></Route>
                    </Switch>

                </CartContext.Provider>
            </Router>
        </>
    )
}


export default App; /* it's already built in js module */

/* 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<Routes>
    <Route path="/page" element = {<Page/>}></Route>
</Routes>
*/