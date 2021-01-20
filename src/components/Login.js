import React, {Component} from 'react'
import {Botao} from './botao';
import './css/botao.css';
import {Input} from './container'
import {Link} from 'react-router-dom';


export class Login extends Component {
    render(){
        return(
            <div id="conte1" className="container ">
                <div className="row justify-content-center">
                    <div id="container-titulo">LOGIN</div>
                </div>
                {/*INPUTS*/}
                <div className="row justify-content-center">
                    <Input id="InpL" type="text" class="mt-5 row" name="nome-usuario" place="NOME DE USUÁRIO" />
                </div>
                <div className="row justify-content-center">
                    <Input id="InpL" type="text" class="mt-4" name="senha" place="SENHA" />
                </div>
                <div className="row justify-content-center mt-4">
                    <div id="checkbx"><Input type="checkbox"/></div>
                    <div id="manter-conectado">MANTER CONECTADO</div>
                </div>
                <div className="row justify-content-center mt-5">
                    <button type="button" className="btn btn-light rounded-circle" id="botaoplay"><i class="fas fa-play"/></button>
                </div>
                <div id="clique-aqui" className="mt-4">
                    <div>NÃO TEM CADASTRO?</div>
                    <div ><Link id="aqui" class="nav-link" to="/Page2"><u>CLIQUE AQUI</u></Link></div>
                </div>
            </div>
        )
    }
}

export default Login;