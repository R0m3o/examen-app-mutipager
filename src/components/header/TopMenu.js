import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../auth/LoginContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function TopMenu() {
    const { loggedIn } = useContext(LoginContext);

    let logInLogout;

    if (loggedIn) {
        logInLogout = (
            <Link to={'/my-profile'}>MIN PROFIL</Link>
        )
    } else {
        logInLogout = (
            <Link to='/login'>LOGIN</Link>
        )
    }

    return(
        <Navbar expand="lg" className="offset-md-3 col-md-6">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Item>
                        <Link to='/'>FORSIDE</Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Link to='/products'>PRODUKTER</Link>
                    </Nav.Item>

                    <Nav.Item>
                        <h2>bageriet</h2>
                    </Nav.Item>

                    <Nav.Item>
                        <Link to='/kontact'>KONTAKT</Link>
                    </Nav.Item>

                    <Nav.Item>
                        {logInLogout}
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopMenu;