import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import {Carousel, Jumbotron, Button, Card, Col, Row, Container} from 'react-bootstrap';


const InicioAluno = () =>{

    return(

        <div className='ajustecor' style={{ backgroundColor : '#4e0d21' }}>
            <Menu />
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.mundosenai.com.br/media/images/dev2.jpeg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Bem vindo, Aluno!</h3>
                <p>Use essa página para acessar e visualizar os cadastros do seu docente.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
                <Container className='ajustar' style={{ marginTop : '70px' }}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.2em1consultoria.com.br/wp-content/uploads/2020/04/download.jpg" />
                            <Card.Body>
                                <Card.Title>Ir para dicas</Card.Title>
                                <Card.Text>
                                Verifique as dicas cadastradas pelo seu professor!
                                </Card.Text>
                                <Button variant="primary" href='/dicas'>Bora!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://abmes.org.br/arquivos/noticias/insights08042020.png" />
                            <Card.Body>
                                <Card.Title>Ir para objetivos</Card.Title>
                                <Card.Text>
                                Verifique os objetivos cadastrados pelo seu professor.
                                </Card.Text>
                                <Button variant="primary">Bora!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.cobranews.com.br/wp-content/uploads/2020/04/escola-1024x576.jpg" />
                            <Card.Body>
                                <Card.Title>Ir para sua instituição</Card.Title>
                                <Card.Text>
                                Verifique a instituição na qual voce estuda e suas informações.
                                </Card.Text>
                                <Button className="text-center" variant="primary">Bora!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Rodape />
        </div>

    )

}

export default InicioAluno;