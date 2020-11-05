import React, { useState, useEffect } from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';
import { url } from '../../utils/constants';
import { Button, Container, Table, Popover, OverlayTrigger, Row, Card } from 'react-bootstrap';

const Curso = () => {
    
    const [idCurso, setIdCurso] = useState(0);
    const [idInstituicoes, setIdInstituicoes] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState([]);
    const [instituicoes, setInstituicoes] = useState([]);

    useEffect(() => {
        listarCursos();
        listarInstituicoes();
    }, []);

    const listarCursos = () => {
        fetch(url + 'curso')
            .then(response => response.json())
            .then(data => {
                setCurso(data);
            })
            .catch(err => console.error(err));
    }

    const listarInstituicoes = () => {
        fetch(url + 'instituicaos')
            .then(response => response.json())
            .then(data => {
                setInstituicoes(data);
            })
            .catch(err => console.error(err));
    }

    const popoverInformatica = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Informações sobre a instituição</Popover.Title>
            <Popover.Content>
                {
                    instituicoes.map((item, index) => {
                        return (
                            <p>
                                Rua: {item.logradouro}<br />
                                Bairro: {item.bairro}<br />
                                Numero: {item.numero}
                            </p>
                        )
                    })
                }
            </Popover.Content>
        </Popover>
    );

    const PopoverInformatica = () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popoverInformatica}>
            <Button style={{ background: '#00C2EE', borderColor: '#00C2EE', marginLeft : '20px' }}>Clique para mais informações</Button>
        </OverlayTrigger>
    );

    return (
        <div>
            <Menu />
            <Container>
                <Row style={{ margin: '3em -1em 0' }}>
                    {
                        curso.map((item, index) => {
                            return (
                                <Card style={{ width: '20rem', margin: '3em' }}>
                                    <Card.Body>
                                        <Card.Title value={item.titulo}>{item.titulo}</Card.Title>
                                        <Card.Text>{
                                            instituicoes.map((item, index) => {
                                                return (
                                                    <p style={{marginLeft : '60px'}}>{item.nome}</p>
                                                )
                                            })
                                        }
                                        </Card.Text>
                                        <PopoverInformatica />
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Row>
            </Container>
            <Rodape />
        </div>
    )
}

export default Curso;