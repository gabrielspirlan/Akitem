import React from "react"
import HeaderMenu from "../components/Header/HeaderMenu"
import CardProduto from "../components/Produto/CardProduto"
import Produtos from "../data/Produtos"
import './Home.css'
import Footer from "../components/Footer/Footer.jsx"

export default function Home() {

    const produtos = Produtos.map( 
        (p, i) => (
          <CardProduto nome={p.Nome} preco={p.Preco} imagem={p.img}  id={p.id} descricao={p.Descricao}/>
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