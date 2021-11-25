import React from "react";
import './CardProduto.css'
import { Link } from "react-router-dom";

export default function CardProduto (props) {
    return (
   
                <div className="CardProduto">
                    <Link to='/produto'>
                        <img src={props.imagem} alt="Produto" />
                        <div>
                            <h1>{props.nome}</h1>
                            <p>R$ {props.preco}</p>
                        </div>
                    </Link>
                </div>
   
    )
}