import React from 'react';
import { Link } from 'react-router-dom';
import '../Shop.css';

const Nav = ()=> {
    return (
        <nav>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            <Link to='/shop'><li>Shopping</li></Link>
        </ul>
        </nav>
    )
}

export default Nav;