import React from "react";
import './CampoLogin.css'
import { Link } from "react-router-dom";

export default function CampoLogin () {
    return (
        <div className='Login'>
            <div className='CampoLogin'>
                <div>
                    <label className='Email' for='email'>Email</label>
                    <input type="email" id='email' />
                </div>
                <div>
                    <label className='Senha' for='senha'>Senha</label>
                    <input type="text" id='senha'/>
                </div>
                <p className='Esqueci'><a href="/">Esqueci minha senha</a></p>
            </div>
            <div className="Botoes">
                <button className="Continuar">Continuar</button>
                <Link to='/'><button className="Cancelar">Cancelar</button></Link>
            </div>
        </div>
    )
}