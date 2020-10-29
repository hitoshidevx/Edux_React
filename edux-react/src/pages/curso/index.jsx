import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';

const Curso = () => {

    return(

        <div>
            <Menu />
            <Titulo titulo="Curso" chamada="Consulte seus cursos" />
            <Rodape />
        </div>

    )

}

export default Curso;