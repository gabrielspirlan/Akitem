import React from "react";
import './Footer.css'
import Logo from '../img/Akitem100px.png'
export default function Footer () {
    return (
        <footer className='Footer'>
            <img src={Logo} alt="" />
            <p>Site para comerciantes locais</p>
            <address>
                Rua do Sobe e Desce, 33
                Morro Alto de Cima/SP
                <a href="">Email</a>
            </address>
        </footer>
    )
}

