import React from 'react';
import './card.css';

export default function Card(props) {
    return(
        <div className="cards">
            <div className="card-body">
                {props.children}
            </div>
            <div className="card-footer" style={{backgroundColor:props.color || "#000"}}>
                {props.titulo}
            </div>
        </div>
    )
}