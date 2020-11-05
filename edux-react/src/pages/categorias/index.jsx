import React, { useState, useEffect } from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';
import { Container, Table } from 'react-bootstrap';
import {url} from '../../utils/constants';

const Categorias = () => {
    
    const [id, setId] = useState(0);
    const [tipo, setTipo] = useState('');
    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        listarCategoria();
        
    }, []);

    const listarCategoria = () => {
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
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                categoria.map((item, index) => {
                                    return(
                                    <tr>
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