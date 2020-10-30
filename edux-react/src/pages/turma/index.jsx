import React from 'react';
import { Card, CardDeck, Container, Form, Button, Dropdown } from 'react-bootstrap';
import Menu from '../../components/menu';
import Titulo from '../../components/titulo';
import Rodape from '../../components/rodape';
import './index.css'

const Turma = () => {

    const listarTurmas = () => {

    }
    const listarAlunos = () => {
        
    }

    return (
        <div>
            <Menu />
                <Titulo titulo="Turma" chamada="Turmas Cadastradas"/>
            <Container>
            <div style={{margin: "auto"}}>
                    <CardDeck className="textcenter" style={{marginBottom : "25px"}}>
                        <Card>
                            <Card.Img variant="top" className="centro" src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" />
                            <Card.Body>
                            <Card.Title>Turma A</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Desenvolvimento de Sistemas</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" className="centro" src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" />
                            <Card.Body>
                            <Card.Title>Turma B</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Multimídia</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                    <CardDeck className="textcenter" style={{marginBottom : "25px"}}>
                            <Card>
                                <Card.Img variant="top" className="centro" src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" />
                                <Card.Body>
                                <Card.Title>Turma C</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Redes de Computadores</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" className="centro" src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" />
                                <Card.Body>
                                <Card.Title>Turma D</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Desenvolvimento de Sistemas</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </Container>
            <Rodape />
        </div>
    )
}

export default Turma;