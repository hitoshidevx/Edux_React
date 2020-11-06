import React, { useState, useEffect } from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import Menu from '../../components/menu';
import Titulo from '../../components/titulo';
import Rodape from '../../components/rodape';
import { url } from '../../utils/constants';
import './index.css'

const Turma = () => {

    const [aluno, setAluno] = useState([]);
    const [turma, setTurma] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        listarAluno();

    }, []);

    const listarAluno = () => {
        fetch(`${url}usuarios`)
            .then(response => response.json())
            .then(data => {
                setUsuarios(data)
                console.log(data);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Menu />
                <Titulo titulo="Turma" chamada="Minha Turma"/>
            <Container>
            <div style={{margin: "auto"}}>
                        <Card className="centro" style={{width : "80rem"}}>
                            <Card.Img variant="top" className="imgcentro" src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" />
                            <Card.Body>
                            <Card.Title>Minha Turma</Card.Title>
                            <Card.Title>Alunos</Card.Title>
                            <Card.Text>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Nome dos Alunos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usuarios.map((item, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td>{item.nome}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Card.Text >
                            </Card.Body>
                            <Card.Footer className="centro">
                            <small className="text-muted">Desenvolvimento de Sistemas</small>
                            </Card.Footer>
                        </Card>
                    </div>
                </Container>
            <Rodape />
        </div>
    )
}

export default Turma;