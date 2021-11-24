import React from "react";
import './HeaderMenu.css'
import Facebook from '../img/facebook64x64.png'
import Instagram from '../img/instagram64x64.png'
import Akitem from '../img/Akitem100px.png'

export default function HeaderMenu () {
    return (
        <div className='MenuPrincipal'>
                <header className='HeaderMenu'>
                    <img className='Logo' src={Akitem} alt="LOGO"/>
                    {/* <figure className='Social'><img  src={Facebook} alt="Facebook" /></figure>
                    <img className='Social' src={Instagram} alt="Instagram" /> */}
                    <input ClassName='Pesquisa'type="text" placeholder='Pesquisa'/>
                </header>
                <nav className='Nav'>
                    <input type="text" placeholder='CEP'/>
                    <div className='MenuContraido'>
                        <input type="checkbox"/>
                        <span></span>
                        <ul className='Menu'>
                            <li><a href="/">Ofertas do dia</a></li>
                            <li><a href="/">Floricultura</a></li>
                            <li><a href="/">Moda</a></li>
                            <li><a href="/">Ferramentas</a></li>
                            <li><a href="/">Construção</a></li>
                            <li><a href="/">Hortifruti</a></li>
                            <li><a href="/">Cadastre-se</a></li>
                            <li><a href="/">Login</a></li>
                        </ul>
                     </div>
                </nav>
        </div>

    )
}