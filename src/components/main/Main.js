import React from 'react';
/* import React, { useContext } from 'react'; */
import { Route } from 'react-router-dom';
/* import { loginContext } from '../auth/LoginContext'; */
import Home from './Home';
import Products from './Products';
import Kontact from './Kontact';
import Login from '../auth/Login';
import LogOut from '../auth/LogOut';
import Product from './Product';

/* const PrivateRoute = ({ component, ...options }) => {
    const { loggedIn } = useContext(LoginContext);
    console.log("privateroute: loggedIn", loggedIn)
  
    const finalComponent = loggedIn ? component : Login;
    return <Route {...options} component={finalComponent}/>
} */

function Main() {
    return(
        <main>
            <Route exact path='/' component={Home}/>
            <Route exact path='/products' component={Products}/>
            <Route exact path='/kontact' component={Kontact}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/logout' component={LogOut}/>
            <Route exact path='/product/:id' component={Product}/>
        </main>
    )
}

export default Main;