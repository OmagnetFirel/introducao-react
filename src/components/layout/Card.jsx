import React from 'react';
import './card.css';

export default function Card(props) {
    return(
        <div className="cards">
            <div className="card-body">
                {props.children}
            </div>
            <div className="card-footer">
                {props.titulo}
            </div>
        </div>
    )
}