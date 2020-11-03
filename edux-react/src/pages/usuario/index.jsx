import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import Menu from '../../components/menu';
import Titulo from '../../components/titulo';
import Rodape from '../../components/rodape';
import './index.css'

const Usuario = () => {
    return (
        <div>
            <Menu />
            <Titulo titulo="Usuário" chamada="Verifique suas informações" />
            <Container>
                <div className="imagemcenter">
                    <img src="https://www.reabilitybauru.com.br/wp-content/uploads/2017/01/perfil-300x300.png" alt="Perfil"/>
                </div>
                <ListGroup className="tabelasize">
                    <ListGroup.Item className="tituloPerfil">Perfil</ListGroup.Item>
                    <ListGroup.Item className="infoPerfil" >Nome: ...</ListGroup.Item>
                    <ListGroup.Item className="infoPerfil" >Email: ...</ListGroup.Item>
                    <ListGroup.Item className="infoPerfil" >Turma: ...</ListGroup.Item>
                    <ListGroup.Item className="infoPerfil" >Intituição: ...</ListGroup.Item>
                    <ListGroup.Item className="infoPerfil" >Tipo de Usuário: ...</ListGroup.Item>
                </ListGroup>
                <Button variant="warning" size="lg" className="centralizar">Editar</Button>
            </Container>
            <Rodape />
        </div>
    )
}

export default Usuario;