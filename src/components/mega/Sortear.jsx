import React from 'react';

export default function Sortear(props){

    function sorteio(){
        let arrNumeros = [];
        for(let i = 0; i <= 6; i++){
            let numero =  Math.floor(Math.random() * (99 - 1) + 1);
            numero = numero < 10 ? '0' + numero : numero;
            arrNumeros.push(numero);
        }
        props.onClicar(arrNumeros);
    }
    return(
        <button onClick={sorteio}>
            Sortear
        </button>
    )
}