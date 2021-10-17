import React, {useState} from 'react';
import Sortear from "./Sortear";
import './Mega.css';


export default function Mega(props) {
    const [numbers,setNumbers] = useState([0,0,0,0,0,0]);

    const trocarNumeros = (numeros) => {
        setNumbers(numeros);
    }

    return (
        <div>
            <h1>MEGA!</h1>
            <div>
                {numbers.map((number,index) => 
                    <span key={index} className="numeroSorteado">{number}</span>)
                }
            </div>
            <Sortear onClicar={trocarNumeros} />
        </div>
    );
}