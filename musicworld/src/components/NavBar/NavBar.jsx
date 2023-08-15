import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="navColor">
                <Container>
                    <img src="/mwLogo.png" className="logo" alt="MW logo" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'>
                            <NavLink className='me-3' to="/">Inicio</NavLink>
                            <NavLink className='me-3' to="/category/viento">Instrumentos de Viento</NavLink>
                            <NavLink className='me-3' to="/category/cuerda">Instrumentos de Cuerda</NavLink>
                            <NavLink className='me-3' to="/category/percusion">Instrumentos de Percusión</NavLink>
                            <CartWidget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar