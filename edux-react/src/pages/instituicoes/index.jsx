import React, { useState, useEffect } from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';
import { url } from '../../utils/constants';
import { Button, Container, Table } from 'react-bootstrap';

const Instituicoes = () => {

    const [idInstituicao, setIdInstituicao] = useState(0);
    const [nome, setNome] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [instituicoes, setInstituicoes] = useState([]);

    useEffect(() => {

        listar();

    }, []);

    const listar = () => {
        fetch(url + 'instituicaos')
            .then(response => response.json())
            .then(data => {
                setInstituicoes(data)
                console.log(data);
            })
            .catch(err => console.error(err));
    }

    return(

        <div>
            <Menu />
            <Titulo titulo="Instituições" chamada="Consulte sua instituição" />
            <Container>
                <Table style={{ background: '#FFFFFF', borderRadius: '10px', marginTop: '2em' }} striped hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Logradouro</th>
                            <th>Numero</th>
                            <th>Complemento</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>Uf</th>
                            <th>Cep</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instituicoes.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.nome}</td>
                                        <td>{item.logradouro}</td>
                                        <td>{item.numero}</td>
                                        <td>{item.complemento}</td>
                                        <td>{item.bairro}</td>
                                        <td>{item.cidade}</td>
                                        <td>{item.uf}</td>
                                        <td>{item.cep}</td>
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

export default Instituicoes;