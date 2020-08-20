import React from 'react';
import { Link } from 'react-router-dom';
import '../Shop.css';

const Nav = ()=> {
    const path = '/react-router';
    return (
        <nav>
        <ul>
            <Link to={`${path}/`}><li>Home</li></Link>
            <Link to={`${path}/about`}><li>About</li></Link>
            <Link to={`${path}/contact`}><li>Contact</li></Link>
            <Link to={`${path}/shop`}><li>Shopping</li></Link>
        </ul>
        </nav>
    )
}

export default Nav;