import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './NavBar.css';

function NavBar({toggleCartOpen}) {
    return (
        <div className="nav-bar">
            <ul className="nav-link-list">
                <li><Link className="nav-link" to='/shopping-cart'>Home</Link></li>
                <li><Link className="nav-link" to='/shopping-cart/shop'>Shop</Link></li>
                <li><Link className="nav-link" to='/shopping-cart/about'>About</Link></li>
            </ul>
            <div className="cart-icon-container" onClick={toggleCartOpen}>
                <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
                <div className="items-in-cart">22</div>
            </div>
        </div>
    )
}

export default NavBar