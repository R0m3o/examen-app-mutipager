import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function TopMenu() {
    return(
        <Navbar expand="lg" className="offset-md-3 col-md-6">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/'>FORSIDE</Link>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/products'>PRODUKTER</Link>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <h2>bageriet</h2>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/kontact'>KONTAKT</Link>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/login'>LOGIN</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopMenu;