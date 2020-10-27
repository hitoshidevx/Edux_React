import React from 'react';
import logo from '../../assets/img/logo.png';

const Rodape = () =>{

    return(

        <footer className="text-center" style={{marginTop : '70px'}}>
            <div className="text-center">
                <img src={logo} alt="Nyous" style={{width : "100px"}}/>
            </div>
            <small>Desenvolvido por <strong>HTRAP</strong></small>
            
        </footer>

    )

}


export default Rodape;