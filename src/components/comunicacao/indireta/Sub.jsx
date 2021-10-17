import React from 'react';

export default function Sub(props){
    function acao(){
        props.onClicar((Math.random() * 0xfffff * 1000000).toString(16))
    }


    return (
        <div>
            <button 
                onClick={acao}
                style={{backgroundColor:props.color}}
                >
                Alterar
            </button>
        </div>
    )
}