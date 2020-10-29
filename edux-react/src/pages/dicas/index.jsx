import React, {useEffect, useState} from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';
import {url} from '../../utils/constants';
import { Container, Table } from 'react-bootstrap';

//pure function Dicas
const Dicas = () => {

    const [id, setId] = useState(0);
    const [texto, setTexto] = useState('');
    const [idUsuario, setidUsuario] = useState('');
    const [imagem, setImagem] = useState('');
    const [dica, setDica] = useState([]);

    useEffect(() => {

        listar();

    }, []);

    const listar = () => {
        fetch(url + 'dica')
            .then(response => response.json())
            .then(data => {
                setDica(data)
                console.log(data);
            })
            .catch(err => console.error(err));
    }


    return(
        <div>
            <Menu />
            <Container>
                <Titulo titulo="Dicas" chamada="Gerencie as suas dicas" />

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Imagem</th>
                    <th>Texto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dica.map((item, index) => {

                            return(
                            <tr>
                                <td><img src={item.imagem} style={{ width : '120px'}}/></td>
                                <td>{item.texto}</td>
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

export default Dicas;