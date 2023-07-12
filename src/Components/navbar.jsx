import { Link } from "react-router-dom";
const Navbar = () => {
    
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
            </div>
            <div className="nav_links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Favourites</Link></li>
                    <li><Link to="/addFavourites">Add To Favourites</Link></li>
                    <li><Link to="">Logout</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;