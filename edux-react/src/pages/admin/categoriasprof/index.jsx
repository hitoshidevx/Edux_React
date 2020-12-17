import React, {useEffect, useState} from 'react';
import Menu from '../../../components/menu';
import Titulo from '../../../components/titulo';
import Rodape from '../../../components/rodape';
import {url} from '../../../utils/constants';
import {Container, Button, CardDeck, Card, Dropdown, Form} from 'react-bootstrap';
import './index.css';

const CategoriasProf = () => {
    
    const [id, setId] = useState(0);
    const [categoria, setCategoria] = useState([]);


    useEffect(() => {
        listarCategoria();
    }, []);

    const adicionar = (event) => {
        event.preventDefault();

        console.log('adicionar' + event.target.value);
    }

    const listarCategoria = () => {
        fetch(url + 'categoria')
        .then(response => response.json())
        .then(data => {
            setCategoria(data)
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
            <Container style={{ marginTop: '4em' }}>
            <Titulo titulo="Categoria" chamada="Cadastre seus alunos em uma categoria" />

                <Button variant="success" size="lg" onClick={event => adicionar(event)} style={{width : "8rem", marginBottom : "2rem", marginLeft : "2rem"}}>Adicionar</Button>
                <div style={{margin: "auto"}}>
                    <CardDeck className="textcenter" style={{marginBottom : "25px"}}>

                        <Card>
                            <Card.Img variant="top" className="centro" src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" />

                            <Card.Body>
                                <Card.Title>Crítica</Card.Title>
                                <Card.Text>
                                    EXTREMAMENTE necessário atingir
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
                                <Card.Title>Desejável</Card.Title>
                                <Card.Text>
                                    Ia ser legal se atingisse, né?
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
                                <Card.Title>Oculta</Card.Title>
                                <Card.Text>
                                    Shhhhh! ;)
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