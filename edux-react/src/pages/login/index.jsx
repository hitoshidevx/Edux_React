import React, { useState } from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import logo from '../../assets/img/logo.png'
import { Form, Container, Button } from 'react-bootstrap'
import './index.css';

const Login = () =>{

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) =>{
        event.preventDefault();

        console.log(`${email} - ${senha}`);

        fetch('https://localhost:44355/api/login',{
        method : 'POST',
        body : JSON.stringify({
            email : email,
            senha : senha

        }),
        headers : {
            'content-type' : 'application/json'


        }
        })
        .then(response => console.log(response.json()));
    } 

    return(
        <div>
            <Menu />
            <Container className='form-height'>
                <Form className='form-signin' onSubmit={event => logar(event)}>
                    <div className="text-center">
                        <img src={logo} alt="Nyous" style={{width : "300px"}}/>
                    </div>
                    <br/>
                    <small>Informe os dados Abaixo</small>
                    <hr/>       
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Informe o email" value={email} onChange={event => setEmail(event.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Informe a senha" value={senha} onChange={event => setSenha(event.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                        <br/><br/>
                        <a href="/cadastrar" style={{marginTop: '30px'}}>Não tenho conta!</a>
                </Form>
            </Container>
            <Rodape />
        </div>
    )

}

export default Login;