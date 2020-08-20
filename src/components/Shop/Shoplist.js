import React, {useState } from 'react';
import {NavLink} from 'react-router-dom';

const Shoplist = (props)=> {

    useState( ()=> {
       // console.log(props);
    }, []);

    return (
        <div className="shoplist">
            <nav className="navbar">
            <ul className="nav">
                <li><NavLink to='/Shop/maze' activeClassName='active'>Maze</NavLink></li>
                <li><NavLink to='/Shop/banana' activeClassName='active'>Banana</NavLink></li>
                <li><NavLink to='/Shop/potato' activeClassName='active'>Potato</NavLink></li>
                <li><NavLink to='/Shop/mango' activeClassName='active'>Mango</NavLink></li>
            </ul>
            </nav>
            <article>Recipes will be loaded here...</article>
        </div>
    )
};

export default Shoplist;

