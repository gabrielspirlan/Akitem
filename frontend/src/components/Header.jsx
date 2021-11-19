import React from "react";
import './Header.css'
import Facebook from '../img/facebook64x64.png'
import Instagram from '../img/instagram64x64.png'
import Akitem from '../img/Akitem100px.png'

export default function Header () {
    return (
        <>
                <header>
                    <img className='Logo' src={Akitem} alt="LOGO"/>
                    {/* <figure className='Social'><img  src={Facebook} alt="Facebook" /></figure>
                    <img className='Social' src={Instagram} alt="Instagram" /> */}

                </header>
        </>

    )
}