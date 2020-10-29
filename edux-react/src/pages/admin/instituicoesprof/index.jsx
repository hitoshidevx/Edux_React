import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';

const InstituicoesProf = () => {

    return(

        <div>
            <Menu />
            <Titulo titulo="Instituições" chamada="Cadastre instituições para seus alunos" />
            <Rodape />
        </div>

    )

}

export default InstituicoesProf;