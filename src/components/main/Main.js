import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { LoginContext } from '../auth/LoginContext';
import Home from './Home';
import Products from './Products';
import Kontact from './Kontact';
import Login from '../auth/Login';
import LogOut from '../auth/LogOut';
import Product from './Product';
import NewUser from '../auth/NewUser';
import MyProfile from '../auth/MyProfile';
import DeleteProfile from '../auth/DeleteProfile';
import PatchProfile from '../auth/PatchProfile';
import SearchResult from './SearchResult';

const PrivateRoute = ({ component, ...options }) => {
    const { loggedIn } = useContext(LoginContext);
    console.log("privateroute: loggedIn", loggedIn)
  
    const finalComponent = loggedIn ? component : Login;
    return <Route {...options} component={finalComponent}/>
}

function Main() {
    return(
        <main>
            <Route exact path='/' component={Home}/>
            <Route exact path='/products' component={Products}/>
            <Route exact path='/kontact' component={Kontact}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/sign-up' component={NewUser}/>
            <PrivateRoute exact path='/my-profile' component={MyProfile}/>
            <PrivateRoute exact path='/patch-profile' component={PatchProfile}/>
            <PrivateRoute exact path='/delete-profile' component={DeleteProfile}/>
            <PrivateRoute exact path='/logout' component={LogOut}/>
            <Route exact path='/product/:id' component={Product}/>
            <Route exact path='/search-result/:searchword' component={SearchResult}/>
        </main>
    )
}

export default Main;