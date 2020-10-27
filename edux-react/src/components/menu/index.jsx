import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';

const Menu = () => {

    return(

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <div className="text-center">
            <img src={logo} alt="Nyous" style={{width : "90px"}}/>
          </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )

}

export default Menu;