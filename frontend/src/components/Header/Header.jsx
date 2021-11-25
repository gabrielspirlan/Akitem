import React from "react";
import './Header.css'
import Akitem from '../../img/Akitem100px.png'

import { Link } from "react-router-dom";

export default function Header () {
    return (
        <>
                <header className='HeaderS'>
                   <Link to='/'><img className='Logo' src={Akitem} alt="LOGO"/></Link> 
                    {/* <figure className='Social'><img  src={Facebook} alt="Facebook" /></figure>
                    <img className='Social' src={Instagram} alt="Instagram" /> */}
                </header>
        </>

    )
}