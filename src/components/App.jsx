import React from 'react';
import ComParametro from './ComParametro';
import ComFilhos from './ComFilhos';
import Repeticao from './Repeticao';
import Condicional from './Condicional';
import Card from './layout/Card';


import './App.css'

export default function App() {
  return (
    <div className="app">
      <Card titulo="#01-PrimeiroComponente">
        <h1>Conteudo</h1>
      </Card>
      <Card titulo="#02-Com Parametros">
          <ComParametro 
          titulo={"Esse é o titulo"} 
          subtitulo={"Esse é o subtitulo pow"} 
        />
      </Card>
      <Card titulo="#3-Com Filhos">
        <ComFilhos>
          <ul>
            <li>Ragnarok</li>
            <li>Valorant</li>
            <li>Fortnite</li>
            <li>League of Legends</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#4-Repeticao">
        <Repeticao />
      </Card>
      <Card titulo="#5-Condicional">
        <Condicional numero={6}/>
      </Card>    
    </div>
  );
}