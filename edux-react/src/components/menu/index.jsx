import React from 'react';
import { useHistory } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import logobranco from '../../assets/img/logobranco.png';
import jwt_decode from "jwt-decode";

const Menu = () => {

  const history = useHistory()

    const sair = (event) => {
        event.preventDefault();

        localStorage.removeItem('token-edux')

        history.push('/')
    }

  const renderMenu = () => {
    const token = localStorage.getItem('token-edux')

    if (token === null) {
        return (
            <Nav>
                <Nav.Link href="/" alt="Página inicial" style={{ color: '#00C2EE' }}><strong>Home</strong></Nav.Link>
                <Nav.Link href="/login" alt="Página de login" style={{ color: '#00D65F' }}><strong>Login</strong></Nav.Link>
                <Nav.Link href="/cadastrar" alt="Página de cadastro de usuário" style={{ color: '#F9E800' }}><strong>Cadastro</strong></Nav.Link>
            </Nav>
        );
    } else if (jwt_decode(token).Role === "2") {
        // Role = 2 (Administrador)
        // Role = 3 (Padrão)
        return (
            <Nav>

                <NavDropdown.Item href="/inicioprof" style={{ color: '#00C2EE' }} variant="dark"> 
                    <strong>Início</strong>
                </NavDropdown.Item>

                <Dropdown>
                    <Dropdown.Toggle style={{ color: '#00C2EE' }} variant="dark" id="dropdown-basic">
                        <strong>Menu</strong>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <NavDropdown.Item href="/dicasprof">Dicas - Prof</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/categoriasprof">Categorias - Prof</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/instituicoesprof">Instituições - Prof</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/cursoprof">Curso - Prof</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/turmasprof">Turmas - Prof</NavDropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle style={{ color: '#00D65F' }} variant="dark" id="dropdown-basic">
                        <strong>{jwt_decode(token).nameid}</strong>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <NavDropdown.Item href="/usuario">Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={event => sair(event)} >Sair</NavDropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        )
    } else {
        return (
            <Nav>
                
                <NavDropdown.Item href="/inicioaluno" style={{ color: '#00C2EE' }} variant="dark">
                    <strong>Início</strong>
                </NavDropdown.Item>

                <Dropdown>
                    <Dropdown.Toggle style={{ color: '#00C2EE' }} variant="dark" id="dropdown-basic">
                        <strong>Menu</strong>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <NavDropdown.Item href="/dicas">Dicas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/categorias">Categorias</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/instituicoes">Instituições</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/curso">Curso</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/turma">Turmas</NavDropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle style={{ color: '#00D65F' }} variant="dark" id="dropdown-basic">
                        <strong>{jwt_decode(token).nameid}</strong>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/usuario">Perfil</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={event => sair(event)} >Sair</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        )
    }
}

    return(

        <Navbar className="cordefundo" style={{background : "#272c31"}}>
        <Navbar.Brand href="/">
          <div className="text-center">
            <img src={logobranco} alt="Nyous" style={{width : "90px"}}/>
          </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          { renderMenu() }
        </Navbar.Collapse>
      </Navbar>

    )

}

export default Menu;