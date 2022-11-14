import {Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
            <Link to="/"><img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="" /></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px',backgroundColor:'blue' }}
                        navbarScroll
                    >
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;