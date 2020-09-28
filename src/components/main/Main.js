import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import CardComponent from './Card';
import AccordionComponent from './Accordion';
import FormComponent from './Form';
import Products from './Products';
import Kontact from './Kontact';
import Login from './Login';

function Main() {
    return(
        <main>
            <Route exact path='/' component={Home}/>
            <Route exact path='/products' component={Products}/>
            <Route exact path='/kontact' component={Kontact}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/card' component={CardComponent}/>
            <Route exact path='/accordion' component={AccordionComponent}/>
            <Route exact path='/form' component={FormComponent}/>
        </main>
    )
}

export default Main;