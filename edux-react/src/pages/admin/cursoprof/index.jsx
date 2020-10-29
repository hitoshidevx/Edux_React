import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';

const CursoProf = () => {

    return(

        <div>
            <Menu />
            <Titulo titulo="Curso" chamada="Cadastre cursos para seus alunos" />
            <Rodape />
        </div>

    )

}

export default CursoProf;