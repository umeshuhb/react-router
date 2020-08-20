import React, {useState } from 'react';
import {NavLink, Route} from 'react-router-dom';

const Shoplist = (props)=> {

    useState( ()=> {
    //    console.log(props);
    }, []);

    return (
        <div className="shoplist">
            <nav className="navbar">
            <ul className="nav">
                <li><NavLink to={`${props.match.path}/maze`} activeClassName='active'>Maze</NavLink></li>
                <li><NavLink to={`${props.match.path}/banana`} activeClassName='active'>Banana</NavLink></li>
                <li><NavLink to={`${props.match.path}/potato`} activeClassName='active'>Potato</NavLink></li>
                <li><NavLink to={`${props.match.path}/mango`} activeClassName='active'>Mango</NavLink></li>
                <li><NavLink to={`${props.match.path}/apple`} activeClassName='active'>Apple</NavLink></li>
                <li><NavLink to={`${props.match.path}/cabbage`} activeClassName='active'>Cabbage</NavLink></li>
                <li><NavLink to={`${props.match.path}/pear`} activeClassName='active'>Orange</NavLink></li>
            </ul>
            </nav>

            <Route exact path={`${props.match.path}`} component={Placeholder} />

        </div>
    )
};

export const Placeholder = ()=>{

    const mystyle = {
        height: "80vh",
        display: "flex",
        justifyContent:"center",
        color: "blueviolet",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "center",
        lineHeight: "30px"
    };

    return (
        <article style={mystyle}>Recipes will be loaded here... <br/>This component will be removed on route change.</article>
    )
};

export default Shoplist;

