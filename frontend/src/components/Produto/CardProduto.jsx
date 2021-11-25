import React from "react";
import './CardProduto.css'
import { Link } from "react-router-dom";
import ProdutoAtual from "../../data/ProdutoAtual";

export default function CardProduto (props) {

    return (
                <div className="CardProduto">
                    <Link to='/produto' onClick={ () => {
                               ProdutoAtual[0].Nome = props.nome
                               ProdutoAtual[0].id = props.id
                               ProdutoAtual[0].Descricao = props.descricao
                               ProdutoAtual[0].img = props.imagem
                               ProdutoAtual[0].Preco = props.preco
                            }
                        }>
                        <img src={props.imagem} alt="Produto" />
                        <div>
                            <h1>{props.nome}</h1>
                            <p>R$ {props.preco}</p>
                        </div>

                    </Link>
              
                </div>
   
    )
}