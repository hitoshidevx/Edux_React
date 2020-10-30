import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

const Titulo = ({titulo, chamada}) => {

    return (
        <Jumbotron>
            <Container>
                <h1>{titulo}</h1>
                <p>
                    {chamada}
                </p>
            </Container>
        </Jumbotron>
    )

}

export default Titulo;