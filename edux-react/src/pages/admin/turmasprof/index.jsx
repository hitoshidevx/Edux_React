import React, {useState} from 'react';
import { Card, CardDeck, Container, Button, Form, Dropdown } from 'react-bootstrap';
import Menu from '../../../components/menu';
import Titulo from '../../../components/titulo';
import Rodape from '../../../components/rodape';
import './index.css'

const TurmaProf = () => {

    const [turma, setTurma] = useState('');
    const [aluno, setAluno] = useState('');
    const [curso, setCurso] = useState('');

    const adicionar = (event) => {
        event.PreventDefault();

    }
    const editar = (event) => {
        event.PreventDefault();

    }
    const remover = (event) => {
        event.PreventDefault();

    }

    return (
        <div>
            <Menu />
                <Titulo titulo="Turma" chamada="Ajuste, adicione ou remova alguma turma"/>
                <Container>
                    <Button variant="success" size="lg" onClick={event => adicionar(event)} style={{width : "8rem", marginBottom : "2rem", marginLeft : "2rem"}}>Criar</Button>
                    <div style={{margin: "auto"}}>
                        <CardDeck className="textcenter" style={{marginBottom : "25px"}}>
                            <Card>
                                <Card.Img variant="top" className="centro" src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" />
                                <Card.Body>
                                <Card.Title>Turma A</Card.Title>
                                <Card.Title>Alunos</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <div className="botaocentro">
                                <Dropdown style={{marginRight : "1rem"}}>
                                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                        Editar
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Form.Control type="text" placeholder="Turma" value={turma} onChange={event => setTurma(event.target.value)}/>    
                                        <Form.Control type="text" placeholder="Aluno" value={aluno} onChange={event => setAluno(event.target.value)}/>    
                                        <Form.Control type="text" placeholder="Curso" value={curso} onChange={event => setCurso(event.target.value)}/>  
                                        <Button style={{margin : "1em"}} variant="primary" type="submit">
                                            Submit
                                        </Button>  
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant="danger" onClick={event => remover(event)} >Remover</Button>
                                </div>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Desenvolvimento de Sistemas</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" className="centro" src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" />
                                <Card.Body>
                                <Card.Title>Turma B</Card.Title>
                                <Card.Title>Alunos</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <div className="botaocentro">
                                <Dropdown style={{marginRight : "1rem"}}>
                                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                        Editar
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Form.Control type="text" placeholder="Turma" value={turma} onChange={event => setTurma(event.target.value)}/>    
                                        <Form.Control type="text" placeholder="Aluno" value={aluno} onChange={event => setAluno(event.target.value)}/>    
                                        <Form.Control type="text" placeholder="Curso" value={curso} onChange={event => setCurso(event.target.value)}/>  
                                        <Button style={{margin : "1em"}} variant="primary" type="submit">
                                            Submit
                                        </Button>  
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant="danger" onClick={event => remover(event)} >Remover</Button>
                                </div>
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
                                <Card.Title>Alunos</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <div className="botaocentro">
                                    <Dropdown style={{marginRight : "1rem"}}>
                                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                            Editar
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                        <Form.Control type="text" placeholder="Turma" value={turma} onChange={event => setTurma(event.target.value)}/>    
                                        <Form.Control type="text" placeholder="Aluno" value={aluno} onChange={event => setAluno(event.target.value)}/>    
                                        <Form.Control type="text" placeholder="Curso" value={curso} onChange={event => setCurso(event.target.value)}/>  
                                        <Button style={{margin : "1em"}} variant="primary" type="submit">
                                            Submit
                                        </Button>  
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    <Button variant="danger" onClick={event => remover(event)} >Remover</Button>
                                </div>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Redes de Computadores</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" className="centro" src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg" />
                                <Card.Body>
                                <Card.Title>{turma}</Card.Title>
                                <Card.Title>Alunos</Card.Title>
                                <Card.Text>
                                    {aluno}
                                </Card.Text>
                                <div className="botaocentro">
                                    <Dropdown style={{marginRight : "1rem"}}>
                                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                            Editar
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                        <Form.Control type="text" placeholder="Turma" value={turma} onChange={event => setTurma(event.target.value)}/>    
                                        <Form.Control type="text" placeholder="Aluno" value={aluno} onChange={event => setAluno(event.target.value)}/>    
                                        <Form.Control type="text" placeholder="Curso" value={curso} onChange={event => setCurso(event.target.value)}/>  
                                        <Button style={{margin : "1em"}} variant="primary" type="submit">
                                            Submit
                                        </Button>  
                                        </Dropdown.Menu>

                                    </Dropdown>
                                    <Button variant="danger" onClick={event => remover(event)} >Remover</Button>
                                </div>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">{curso}</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </Container>
            <Rodape />
        </div>
    )
}

export default TurmaProf;