import React from 'react';
import { Link } from 'gatsby';
import './Navbar.css';
const Navbar = () => {
    return ( 
        <nav>
            <Link className="navLink" activeClassName="navLink-active" to={"/"}>Inicio</Link>
            <Link className="navLink" activeClassName="navLink-active" to={"/nosotros"}>Nosotros</Link>
            <Link className="navLink" activeClassName="navLink-active" to={"/propiedades"}>Propiedades</Link>
        </nav>
     );
}
 
export default Navbar;