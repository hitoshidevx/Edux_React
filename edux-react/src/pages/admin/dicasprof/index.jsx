import React, {useEffect, useState} from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';
import {url} from '../../../utils/constants';
import { Container, Table, Button } from 'react-bootstrap';

//pure function Dicas
const DicasProf = () => {
    
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

            <Table striped bordered hover className="ajuste" style={{ marginTop : '10px' }}>
                <thead>
                    <tr>
                    <th>Imagem</th>
                    <th>Texto</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dica.map((item, index) => {

                            return(
                            <tr>
                                <td><img src={item.imagem} style={{ width : '120px'}}/></td>
                                <td>{item.texto}</td>
                                <td className="curso"style={{marginLeft : '100px'}}>
                                    <Button variant="success" style={{marginLeft : '200px'}}>Editar</Button>{' '}
                                    <Button variant="danger" style={{marginLeft : '20px', marginRight : 'auto'}}>Deletar</Button>{' '}
                                </td>
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

export default DicasProf;