import React from "react";
import './CardProduto.css'

export default function CardProduto (props) {
    return (
            <div className="CardProduto">
                <img src={props.imagem} alt="Produto" />
                <div className='NomePreco'>
                    <h1>{props.nome}</h1>
                    <p>R$ {props.preco}</p>
                </div>
            </div>
    )
}