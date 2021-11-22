import React from "react";
import './CampoCadastro.css'

export default function CampoCadastro () {
    return (
        <div className='Cadastro'>
            <div className='CampoCadastro'>
                <div className='linha'>
                    <div className='Nome'>
                        <label>Nome</label>
                        <input type="text" />
                    </div>
                    <div className='CPFCNPJ'>
                        <label>CPF ou CNPJ</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='linha'>
                    <div className='CEP'>
                        <label>CEP</label>
                        <input type="text" />
                    </div>
                    <div className='Endereco'>
                        <label >Enderço</label>
                        <input type="text" />
                    </div>
                    <div className='Numero'>
                        <label>Número</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='linha'>
                    <div className='Cidade'>
                        <label >Cidade</label>
                        <input type="text" />
                    </div>
                    <div className='Estado'>
                        <label >Estado</label>
                        <input type="text" />
                    </div>
                    <div className='Complemento'>
                        <label >Complemento</label>
                        <input type="text" />
                    </div>
                </div>

                <div className='linha'>
                    <div className='Email'>
                        <label >Email</label>
                        <input type="text" />
                    </div>
                    <div className='Senha'>
                        <label >Senha</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className="Botoes">
                <button className="Continuar">Continuar</button>
                <button className="Cancelar">Cancelar</button>
            </div>
        </div>
    )
}