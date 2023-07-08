import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="navColor">
                <Container >
                    <img src="./mwLogo.png" className="logo" alt="MW logo" />    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Instrumentos de viento</Nav.Link>
                            <Nav.Link href="#link">Instrumentos de cuerda</Nav.Link>
                            <Nav.Link href="#link">Instrumentos de percusión</Nav.Link>      
                            <CartWidget />                                                  
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar