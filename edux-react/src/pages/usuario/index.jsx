import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import Menu from '../../components/menu';
import Titulo from '../../components/titulo';
import Rodape from '../../components/rodape';
import './index.css'
import { url } from '../../utils/constants';

const Usuario = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [turma, setTurma] = useState('');
    const [instituicaos, setInst] = useState('');
    const [idPerfil, setIdPerfil] = useState(0);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        listar();

    }, []);

    const listar = () => {
        fetch(url + 'usuarios')
            .then(response => response.json())
            .then(data => {
                setUsuarios(data)
                console.log(data);
            })
            .catch(err => console.error(err));
    }

    const mostrarDados = () => {

    }

    return (
        <div>
            <Menu />
            <Titulo titulo="Usuário" chamada="Verifique suas informações" />
            <Container>
                <div className="imagemcenter">
                    <img src="https://www.reabilitybauru.com.br/wp-content/uploads/2017/01/perfil-300x300.png" alt="Perfil"/>
                </div>
                <ListGroup className="tabelasize">
                {
                    usuarios.map((item, index) => {
                        return(
                            <div key={index}>
                                    <ListGroup.Item className="tituloPerfil">Perfil</ListGroup.Item>
                                    <ListGroup.Item className="infoPerfil" >Nome: {item.nome}</ListGroup.Item>
                                    <ListGroup.Item className="infoPerfil" >Email: {item.email}</ListGroup.Item>
                                    <ListGroup.Item className="infoPerfil" >Turma: {item.turma}</ListGroup.Item>
                                    <ListGroup.Item className="infoPerfil" >Intituição: {item.instituicaos}</ListGroup.Item>
                                    <ListGroup.Item className="infoPerfil" >Tipo de Usuário: {item.idPerfil}</ListGroup.Item>
                            </div>
                        )
                    })
                }
                <Button variant="warning" size="lg" className="centralizar">Editar</Button>
                </ListGroup>
            </Container>
            <Rodape />
        </div>
    )
}

export default Usuario;