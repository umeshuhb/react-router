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
  return (
      <div className="app">

        <Router>
            <Nav />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/shop" component={Shoplist}>
                </Route>
                <Route path="/shop/:id" component={Shop}></Route>

        </Router>
      </div>
  );

}

export default App;
