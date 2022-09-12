import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';

const Product = (props) => {

    const [ isAdding, setIsAdding ] = useState(false);

    const { cart, setCart } = useContext(CartContext);

    console.log(props);
    const { product } = props;

    const addToCart = (event, product) =>{
        console.log(event);
        // event.stopPropagation();
        event.preventDefault();  /* if inside link use preventDefault */
        let _cart = {...cart}; // { items: {}}, cart clone with three dot
        if (!_cart.items) {
            _cart.items = {}
        }
        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;
        } else {
            _cart.items[product._id] = 1;
        }

        if(!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;

        setCart(_cart);

        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000);

        /* //
        // const cart = {
        //     items: {
        //         '608c2960e165f6137f02b552': 2,
        //         '608c28e8e165f6137f02b550': 3
        //     },
        //     totalItems: 5
        // } */


    }

    return (
        <Link to={`/products/${product._id}`}>
            <div>
                {/* <img src="/images/peproni.png" alt="products"/> */}
                <img src={ product.image } alt="products"/>
                <div className="text-center">
                    <h2 className="text-lg font-bold py-2">{product.name}</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{ product.size }</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>₹ {product.price}</span>
                    {/* <button onClick={addToCart} className="py-1 px-4 bg-yellow-500 font-bold rounded-full">ADD</button> */}
                    <button disabled={ isAdding } onClick={(e) => { addToCart(e, product) }} className={`${ isAdding ? 'bg-green-500' : `bg-yellow-500` } py-1 px-4  font-bold rounded-full`}>ADD{ isAdding ? 'ED' : ''}</button>
                </div> {/* e is just an parameter */}
            </div>
        </Link>
    )
}

export default Product;
