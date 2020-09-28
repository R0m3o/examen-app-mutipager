import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function TopMenu() {
    return(
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to='/'>FORSIDE</Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/products'>PRODUKTER</Link>
                    </Nav.Link>

                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to='/card'>Card</Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <Link to='/accordion'>Accordion</Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <Link to='/form'>Form</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    
                    <Nav.Link>
                        <Link to='/kontact'>KONTAKT</Link>
                    </Nav.Link>
                    
                    <Nav.Link>
                        <Link to='/login'>LOGIN</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopMenu;