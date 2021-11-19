import React from "react";
import './CardProduto.css'

export default function CardProduto (props) {
    return (
        <div>
            <img src={imagem} alt="Produto" />
            <h1>{props.nome}</h1>
            <p>Preço: R$ {props.preco}</p>
        </div>
    )
}