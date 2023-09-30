import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">{props.name}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/courses">Cursos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
    )
}

export default Header

/*<header>
            
            <ul>
                <li><Link to="/Courses">Courses</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </header>*/
        