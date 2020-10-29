import React from 'react';
import logobranco from '../../assets/img/logobranco.png';

const Rodape = () =>{

    return(

        <footer className="text-center" style={{marginTop : '150px', background : '#4c0017'}}>
            <div className="text-center">
                <img src={logobranco} alt="Nyous" style={{width : "100px"}}/>
            </div>
            <small style={{color : 'white'}}>Desenvolvido por <strong>HTRAP</strong></small>
            
        </footer>

    )

}


export default Rodape;