import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navbar from './Navbar';
import './Header.css'

const Header = () => {
    // consultar el logo
    const {logo} = useStaticQuery(
    graphql`
        {
            logo: file(relativePath: {eq: "logo.svg"}) {
                publicURL
            }
        }
        `
    )
    return ( 
        <header>
            <div className="nav_menu">
                <Link
                    to="/"
                >
                  <img src={logo.publicURL} alt="logotipo"/>  
                </Link>
                <Navbar/>
            </div>
        </header>
     );
}
 
export default Header;