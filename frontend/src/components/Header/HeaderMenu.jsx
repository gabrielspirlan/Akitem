import React from "react";
import './HeaderMenu.css'
import Akitem from '../../img/Akitem100px.png'

import { Link } from 'react-router-dom'

export default function HeaderMenu () {
    return (
        <div className='MenuPrincipal'>
                <header className='HeaderMenu'>
                <Link to='/'><img className='Logo' src={Akitem} alt="LOGO"/></Link>
                    <input ClassName='Input'type="text" placeholder='Pesquisa'/>
    
                </header>
                <nav className='Nav'>
                    
                    <div className='MenuContraido'>
                        <input type="checkbox"/>
                        <span></span>
                        <ul className='Menu'>
                            <li><a>Ofertas do dia</a></li>
                            <li><a>Floricultura</a></li>
                            <li><a>Moda</a></li>
                            <li><a >Ferramentas</a></li>
                            <li><a>Construção</a></li>
                            <li><a>Hortifruti</a></li>
                            <li><Link className='Link' to='/cadastro'>Cadastre-se</Link></li>
                            <li><Link className='Link' to='/login'>Login</Link></li>
                        </ul>
                     </div>
                     <input className='Input' type="text" placeholder='CEP'/>
                </nav>
        </div>

    )
}