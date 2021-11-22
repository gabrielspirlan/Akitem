import React from "react";
import Produto from "../components/Produto";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import Produtos from '../data/Produtos'
export default function () {
    return (
        <div>
            <HeaderMenu></HeaderMenu>
            <Produto id={Produtos[0].id} nome={Produtos[0].Nome} preco={Produtos[0].Preco}
                descricao={Produtos[0].Descricao} img={Produtos[0].img} 
            />
            <Footer></Footer>
        </div>
    )

}