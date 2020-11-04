import React, { useState, useEffect } from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';
import { url } from '../../utils/constants';
import { Button, Container, Table } from 'react-bootstrap';

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

    return(

        <div>
            <Menu />
            <Titulo titulo="Curso" chamada="Visualize seu curso!" />
            <Container>
                <Table style={{ background: '#FFFFFF', borderRadius: '10px', marginTop: '2em' }} striped hover>
                    <thead>
                        <tr>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            curso.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.titulo}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <thead>
                        <tr>
                            <th>Instituição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instituicoes.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.nome}</td>
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

export default Curso;