import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pokemonImage from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function UserNavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect fixed="top" >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <div className="navbar-logo">
                            <img src={pokemonImage} alt="Logo" width="100" height="50" className="d-inline-block align-top" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className="nav-link">
                                <FaHome /> Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/characters" className="nav-link">
                                Characters
                            </Nav.Link>
                            <Nav.Link as={Link} to="/type-of-pokemon" className="nav-link">
                                Types
                            </Nav.Link>
                            <Nav.Link as={Link} to="/pokemons" className="nav-link">
                                Pokemons
                            </Nav.Link>

                            <NavDropdown title="Profile" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">
                                    Sign Out
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default UserNavBar;
