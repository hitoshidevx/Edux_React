import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Titulo from '../../components/titulo';

const Instituicoes = () => {

    return(

        <div>
            <Menu />
            <Titulo titulo="Instituições" chamada="Consulte sua instituição" />
            <Rodape />
        </div>

    )

}

export default Instituicoes;