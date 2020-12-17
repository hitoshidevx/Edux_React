import React, {useEffect, useState} from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';
import {url} from '../../../utils/constants';
import { Container, Table, Button, Form, Card } from 'react-bootstrap';

//pure function Dicas
const DicasProf = () => {
    
    const [idDica, setIdDica] = useState(0);
    const [texto, setTexto] = useState('');
    const [idUsuario, setidUsuario] = useState('');
    const [imagem, setImagem] = useState({});
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

    const editar = (event) => {

        event.preventDefault();

        console.log('editar' + event.target.value);

    }

    const remover = (event) => {

        event.preventDefault();

        fetch(url + 'dica/' + event.target.value,{
            method : 'DELETE',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('Dica excluida');

            listar();
        })

    }

    const salvar = (event) => {

        event.preventDefault();

        const dica = {
            texto : texto,
            idUsuario : idUsuario,
            imagem : imagem
        }

        let method = (idDica === 0 ? 'POST' : 'PUT');
        let urlRequest = (idDica === 0 ? `${url}Dica` :  `${url}Dica/${idDica}`);
        
         fetch(urlRequest ,{
             method : method,
             body : JSON.stringify(dica),
             headers : {
                'content-type' : 'application/json',
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
             }
         }) 
         .then(response => response.json())
         .then(dados => {
             alert('Dica cadastrada');
             console.log(dados)
 
             listar();
         })

    }

    const uploadFile = (event) =>{
        event.preventDefault();

        let formdata = new FormData();

        formdata.append('arquivo', event.target.files[0]);

        fetch(url + 'Upload', {

            method : 'POST',
            body : formdata, 
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux'),
                'Accept': 'application/json'
            }

        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setImagem(data.url);
        })
        .catch(err => console.log(err));  
    }
 
    return(
        <div>
            <Menu />
            <Container style={{ marginTop: '4em' }}>
                <Titulo titulo="Dicas" chamada="Gerencie as suas dicas" />
                
                <Card style={{marginBottom : '30px'}}  >
                    <Card.Body>
                    <Form onSubmit={event => salvar(event)}>
                        
                        <Form.Group controlId="formTexto">
                            <Form.Label>Texto</Form.Label>
                            <Form.Control as="textarea" rows={1} value={texto} onChange={event => setTexto(event.target.value)} />
                        </Form.Group>


                        <Form.File id="fileCategoria" label="Imagem do Post" onChange={event => {uploadFile(event)}} />
                                { imagem && <img src={imagem} style={{ width : '160px'}} />}

                        <Button style={{marginTop : '25px'}} type="submit" >Adicionar</Button>
                    </Form>
                    </Card.Body>
                </Card>

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
                                    <Button variant="warning" value={item.idDica} onClick={event => editar(event)} style={{marginLeft : '200px'}} >Editar</Button>{' '}
                                    <Button variant="danger" value={item.idDica} onClick={event => remover(event)} style={{marginLeft : '20px', marginRight : 'auto'}}>Deletar</Button>{' '}
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