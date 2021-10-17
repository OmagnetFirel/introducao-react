import React from 'react';

export default function ComFilhos(props){
    return (
        <React.Fragment>
            <h1>Filhos:</h1>
            <div>
                {props.children}
            </div>
        </React.Fragment>
    )
}