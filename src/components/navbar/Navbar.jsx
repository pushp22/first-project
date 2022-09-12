import {Link, NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import "./navbar.css";


const Navbar = () => {

    const cartStyle = {         /* javascript */
        background: '#F59E0D',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px',
    }

    const { cart } = useContext(CartContext);
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4">
                <div>
                    <Link to="/">
                        <img src="/images/logo.png" alt="logo" style={{ height: 45}} />
                    </Link>
                </div>
                <ul className="flex items-center">
                    <li><NavLink exact to = "/" activeClassName="active">Home</NavLink></li>
                    <li className="ml-6"><NavLink exact to = "/page-product" activeClassName= "active" >Products</NavLink></li>
                    <li className="ml-6">
                        <NavLink to = "/cart">
                            <div style={cartStyle}>
                                <span>{ cart.totalItems ? cart.totalItems : 0 }</span>
                                <img className="ml-2" src="/images/cart.png" alt="cart"/>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
            
        </>
    )
}

export default Navbar
