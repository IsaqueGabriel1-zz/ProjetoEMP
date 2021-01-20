import React from 'react';
import Nav from './nav';
import Rodape from '../components/Rodape';
import Fundo from '../components/Fundo'

const Page3 = () =>{
    return(
        <div className="App" id="cor-de-fundo">
                    <div>
                        <Nav />
                    </div>
            <div  className="container-fluid">
                <div>
                    <Fundo />
                </div>
            </div>
            
            <div >
                <Rodape />
            </div>
        </div>   
    )
}

export default Page3;