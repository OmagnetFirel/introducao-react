import React from 'react';
import produtos from './data/products'


export default function Repeticao(props){

    function getProdutos(){
        return produtos.map(function(produto){
            return <li key={produto.id}>
                        {produto.name} - {produto.price}
                    </li>
        })
    }


    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutos()}
            </ul>
        </div>
    )
}