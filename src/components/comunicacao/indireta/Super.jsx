import React, {useState} from 'react';
import Sub from './Sub'

export default function Super(props){
    const [color,setColor] = useState('red');

    const clicar = (corGerada) => {
        console.log("Ação!!!")
        setColor("#" + corGerada.slice(0,6));
    };

    return (
        <div>
            <h4>Valor</h4>
            <Sub onClicar={clicar} color={color}></Sub>
        </div>
    )
}