import React from "react"
import HeaderMenu from "../components/HeaderMenu"
import CardProduto from "../components/CardProduto"
import Produtos from "../data/Produtos"
import './Home.css'
import Footer from "../components/Footer.jsx"

export default function Home() {

    const produtos = Produtos.map( 
        (p, i) => (
          <CardProduto nome={p.Nome} preco={p.Preco} imagem={p.img}  id={p.id}/>
      )
    )

    return(
        <>
            <HeaderMenu></HeaderMenu>
            <div className='TodosProdutos'>{produtos}</div>
            <Footer></Footer>
        </>
    )
}