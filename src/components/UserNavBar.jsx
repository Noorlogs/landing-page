import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FaUser, FaHome } from 'react-icons/fa';
import './css/UserNavBar.css';
import './custom/loginCustomBtn.css'

function UserNavBar() {
    return (
        <Navbar variant="dark" expand="md" fixed="top" className="custom-navbar">
            <Container>

                <Nav className="mr-auto">
                    <Nav.Link href="/" className="nav-link">
                        <FaHome /> Home
                    </Nav.Link>
                    <Nav.Link href="/about" className="nav-link">
                        About
                    </Nav.Link>
                    <Nav.Link href="/contact" className="nav-link">
                        Contact
                    </Nav.Link>
                </Nav>

                {/* <Navbar.Brand href="/">
                    <div className="navbar-logo">
                        Pokemon
                    </div>
                </Navbar.Brand> */}

                <Nav className="ml-auto">
                    <button className="btnLogin">LogIn</button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default UserNavBar;
