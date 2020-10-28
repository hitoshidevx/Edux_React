import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logobranco from '../../assets/img/logobranco.png';

const Menu = () => {

    return(

        <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/">
          <div className="text-center">
            <img src={logobranco} alt="Nyous" style={{width : "90px"}}/>
          </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
              <Nav.Link href="/" style={{color : '#00C2EE'}}>Home</Nav.Link>
              <Nav.Link href="/login" style={{color : '#00D65F'}}>Login</Nav.Link>
              <Nav.Link href="/cadastrar" style={{color : '#F9E800'}}>Cadastrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )

}

export default Menu;