import React, {useState}from 'react';

export default function Contador(props){

    const [passo, setPasso] = useState(1);
    const [valor, setValor] = useState(0);

    function alteraPasso(event){
        setPasso(Number(event.target.value));
    }
    function incrementar(){
        setValor(valor + passo);
    }
    function decrementar(){
        setValor(valor - passo);
    }
    return(
        <div>
            <h2>Contador</h2>
            <h4>valor={valor}</h4>
            <span>Passo:</span>
            <input type="number" value={passo} onChange={alteraPasso}></input>
            <div>
                <button onClick={incrementar}>+</button>
                <button onClick={decrementar}>-</button>
            </div>
        </div>
    );
}