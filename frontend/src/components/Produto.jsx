import React from "react";
import './Produto.css'

export default function Produto (props) {
    return (
        <div className="Produto">
            <div className='Essencial'>
                <img src={props.img} alt="" />
                <div className='NomePreco'>
                    <div className='Informacao'>
                        <h1>{props.nome}</h1>
                        <p className='Preco'>R$ {props.preco}</p>
                        <p className='Divido'>em 4x {props.preco / 4}</p>
                            <div className='BotoesComprar'>
                                <div className='Quantidade'>
                                    <label htmlFor="quantity">Selecione a quantidade: </label>
                                    <input type='text' placeholder='1' ></input>
                                </div>
                                <button className='ComprarAgora'>Comprar Agora</button>
                                <button className='AdicionarCarrinho'>Adicionar ao carrinho</button>
                            </div>
                                        </div>
                    </div>
            </div>
            <div className='Descricao'>
                <h2>Descrição</h2>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}