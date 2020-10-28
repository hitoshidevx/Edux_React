import React from 'react';
import logo from '../../assets/img/logo.png';

const Rodape = () =>{

    return(

        <footer className="text-center" style={{marginTop : '150px', background : '#282828'}}>
            <div className="text-center">
                <img src={logo} alt="Nyous" style={{width : "100px"}}/>
            </div>
            <small style={{color : 'white'}}>Desenvolvido por <strong>HTRAP</strong></small>
            
        </footer>

    )

}


export default Rodape;