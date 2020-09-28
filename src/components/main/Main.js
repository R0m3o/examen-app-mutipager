import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Kontact from './Kontact';
import Login from './Login';
import Product from './Product';

function Main() {
    return(
        <main>
            <Route exact path='/' component={Home}/>
            <Route exact path='/products' component={Products}/>
            <Route exact path='/kontact' component={Kontact}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/product/:id' component={Product}/>
        </main>
    )
}

export default Main;