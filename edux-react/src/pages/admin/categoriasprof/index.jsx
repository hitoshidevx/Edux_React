import React, {useEffect, useState} from 'react';
import Menu from '../../../components/menu';
import Titulo from '../../../components/titulo';
import Rodape from '../../../components/rodape';
import {url} from '../../../utils/constants';
import {Container, Button, CardDeck, Card, Dropdown, Form} from 'react-bootstrap';
import './index.css';

const CategoriasProf = () => {
    
    const [id, setId] = useState(0);
    const [aluno, setAluno] = useState('');
    const [curso, setCurso] = useState('');
    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        listar();
    }, []);

    const adicionar = (event) => {
        event.preventDefault();

        console.log('adicionar' + event.target.value);
    }

    const listar = () => {
        fetch(url + 'categoria')
        .then(response => response.json())
        .then(data => {
            setCurso(data)
            console.log(data);
        })

        .catch(err => console.error(err));
    }

    const editar = (event) => {
        event.preventDefault();
    }

    const remover = (event) => {
        event.preventDefault();

        console.log('remover' + event.target.value);
    }

    return(
        <div>
            <Menu />
            <Container>
            <Titulo titulo="Categoria" chamada="Cadastre seus alunos em uma categoria" />

                <Button variant="success" size="lg" onClick={event => adicionar(event)} style={{width : "8rem", marginBottom : "2rem", marginLeft : "2rem"}}>Adicionar</Button>
                <div style={{margin: "auto"}}>
                    <CardDeck className="textcenter" style={{marginBottom : "25px"}}>

                        <Card>
                            <Card.Img variant="top" className="centro" src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" />

                            <Card.Body>
                                <Card.Title>Categoria 1</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <div className="botaocentro">
                                    <Dropdown style={{marginRight : "1rem"}}>
                                        <Dropdown.Toggle variant="warning" id="dropdown-basic">Editar</Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Form.Control type="text" placeholder="Turma" />
                                            <Form.Control type="text" placeholder="Aluno" />
                                            <Form.Control type="text" placeholder="Categoria" />
                                            <Form.Control type="text" placeholder="Curso" />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button variant="danger" onClick={event => remover(event)} >Remover</Button>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" className="centro" src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" />

                            <Card.Body>
                                <Card.Title>Categoria 2</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <div className="botaocentro">
                                    <Dropdown style={{marginRight : "1rem"}}>
                                        <Dropdown.Toggle variant="warning" id="dropdown-basic">Editar</Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Form.Control type="text" placeholder="Turma" />
                                            <Form.Control type="text" placeholder="Aluno" />
                                            <Form.Control type="text" placeholder="Categoria" />
                                            <Form.Control type="text" placeholder="Curso" />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button variant="danger" onClick={event => remover(event)} >Remover</Button>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" className="centro" src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" />

                            <Card.Body>
                                <Card.Title>Categoria 3</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <div className="botaocentro">
                                    <Dropdown style={{marginRight : "1rem"}}>
                                        <Dropdown.Toggle variant="warning" id="dropdown-basic">Editar</Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Form.Control type="text" placeholder="Turma" />
                                            <Form.Control type="text" placeholder="Aluno" />
                                            <Form.Control type="text" placeholder="Categoria" />
                                            <Form.Control type="text" placeholder="Curso" />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button variant="danger" onClick={event => remover(event)} >Remover</Button>
                                </div>
                            </Card.Body>
                        </Card>

                    </CardDeck>
                </div>
            </Container>
            <Rodape />
        </div>
    )
}

export default CategoriasProf;