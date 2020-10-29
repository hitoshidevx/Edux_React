import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import {Carousel, Jumbotron, Button, Card, Col, Row, Container} from 'react-bootstrap';

const Home = () =>{

    return(

        <div className='ajustecor' style={{ backgroundColor : '#4e0d21' }}>
            <Menu />
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://media-exp1.licdn.com/dms/image/C561BAQF4ImXQA9JqnA/company-background_10000/0?e=2159024400&v=beta&t=VPAXeefZUSD53KAJICque7AHlm2feGnOs9jGdGNljKw"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Facil e Prático</h3>
                <p>Edux possue funções práticas e auto-explicativas.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <Jumbotron className="text-center" style={{backgroundColor : '#661229', borderRadius : '5px', marginTop : '50px'}}>
                <h2 className='ajustar' style={{color : 'white'}}>Estudar nunca foi tão divertido!!</h2>
                <p className='ajustar' style={{color : 'white'}}>
                    Não perca tempo, comece seus estudos :)
                </p>
                <p>
                    <Button variant="primary" href="/login">Login</Button>
                    <Button variant="success" href="/cadastrar" style={{marginLeft: '30px'}}>Cadastrar</Button>
                </p>
                </Jumbotron>
                <Container className='ajustar' style={{ marginTop : '90px' }}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.2em1consultoria.com.br/wp-content/uploads/2020/04/download.jpg" />
                            <Card.Body>
                                <Card.Title>Diversão</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://abmes.org.br/arquivos/noticias/insights08042020.png" />
                            <Card.Body>
                                <Card.Title>Imersão</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.cobranews.com.br/wp-content/uploads/2020/04/escola-1024x576.jpg" />
                            <Card.Body>
                                <Card.Title>Inovação</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="text-center" variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Rodape />
        </div>

    )

}

export default Home;