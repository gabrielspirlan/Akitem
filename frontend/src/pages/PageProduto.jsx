import React from "react";
import Produto from "../components/Produto/Produto";
import HeaderMenu from "../components/Header/HeaderMenu";
import Footer from "../components/Footer/Footer";
import ProdutoAtual from "../data/ProdutoAtual";
export default function () {
    return (
        <div>
            <HeaderMenu></HeaderMenu>
            <Produto id={ProdutoAtual[0].id} nome={ProdutoAtual[0].Nome} preco={ProdutoAtual[0].Preco} descricao={ProdutoAtual[0].Descricao} img={ProdutoAtual[0].img} />
            <Footer></Footer>
        </div>
    )

}