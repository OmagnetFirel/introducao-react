import React from 'react';
import Filho from './Filho'

export default function Pai(props){
    return (
        <div>
            <Filho {...props}>Luffy</Filho>
            <Filho sobrenome={props.sobrenome}>Sasuke</Filho>
            <Filho sobrenome="Silva">Hinata</Filho>
        </div>
    )
}