import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
    
    return (
        <div className="home-page-container">
            <div className="home-page-content">
                <div className="left-side">
                    <Link to='/shopping-cart/shop' ><button className="home-shopping-button">Start Shopping Now!</button></Link>
                </div>
                <div className="right-side">
                    Welcome to the greatest fake tech store there is! We offer something for everybody.  The best part is you won't even spend any real money (although you won't receive any products either)  Start fake shopping today!
                </div>
            </div>
        </div>

    )
}