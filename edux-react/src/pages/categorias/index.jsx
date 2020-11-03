import React, { useState, useEffect } from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';
import { Container, Table } from 'react-bootstrap';
import {url} from '../../utils/constants';

const Categorias = () => {
    const [aluno, setAluno] = useState('');
    const [curso, setCurso] = useState('');

    useEffect(() => {
        listar();
        
    }, []);

    const listar = () => {
        fetch(url + 'categoria')
            .then(response => response.json())
            .then(data => {
                setCurso(data)
                console.log(data);
            })

            .catch(err => console.error(err));
    }

    return(
        <div>
            <Menu />
                <Container>
                    <Titulo titulo="Categorias" chamada="Gerencie suas categorias" />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Curso</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                curso.map((item, index) => {
                                    return(
                                    <tr>
                                        <td><img src={item.nome} style={{ width : '120px'}}/></td>
                                        <td>{item.curso}</td>
                                        <td>{item.tipo}</td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Container>
            <Rodape />
        </div>
    )
}

export default Categorias;