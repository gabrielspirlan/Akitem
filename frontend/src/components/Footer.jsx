import React from "react";
import './Footer.css'
import Logo from '../img/Akitem100px.png'
export default function Footer () {
    return (
        <footer className='Footer'>
            <img src={Logo} alt="" />
            <p>Apoio ao comércio local!</p>
            <div>
                <p>Projeto desenvolvido por </p>
                <ul>
                    <li>Cauã Sene de Andrade</li>
                    <li>Danilo Pereira da Silva</li>
                    <li>Gabriel Resende Spirlandelli</li>
                    <li>Gabriela Cardoso Otolani</li>
                    <li>Vinicius Roberto Polo</li>
                </ul>
            </div>
        </footer>
    )
}

