import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Shoplist from './components/Shop/Shoplist';
import Shop from './components/Shop/Shop';

function App() {

    const path = '/react-router';
  return (
      <div className="app">

        <Router>
            <Nav />

                <Route exact path={`${path}/`} component={Home} />
                <Route path={`${path}/about`} component={About} />
                <Route path={`${path}/contact`} component={Contact} />
                <Route path={`${path}/shop`} component={Shoplist}>
                </Route>
                <Route path={`${path}/shop/:id`} component={Shop}></Route>

        </Router>
      </div>
  );

}

export default App;
