import React from 'react';
import ComParametro from './basicos/ComParametro';
import ComFilhos from './basicos/ComFilhos';
import Repeticao from './basicos/Repeticao';
import Condicional from './basicos/Condicional';
import Pai from './comunicacao/direta/Pai';
import Super from './comunicacao/indireta/Super';
import Input from './form/Input';
import Contador from './contador/Contador';
import Mega from './mega/Mega'
import Card from './layout/Card';


import './App.css'

export default function App() {
  return (
    <div className="app">
      <Card titulo="#01-PrimeiroComponente">
        <h1>Conteudo</h1>
      </Card>
      <Card titulo="#02-Com Parametros" color="#AEE5D8">
          <ComParametro 
          titulo={"Esse é o titulo"} 
          subtitulo={"Esse é o subtitulo pow"} 
        />
      </Card>
      <Card titulo="#3-Com Filhos" color="#7BE0AD">
        <ComFilhos>
          <ul>
            <li>Ragnarok</li>
            <li>Valorant</li>
            <li>Fortnite</li>
            <li>League of Legends</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#4-Repeticao" color="#E5D0E3">
        <Repeticao />
      </Card>
      <Card titulo="#5-Condicional" color="#E0B0D5">
        <Condicional numero={6}/>
      </Card>    
      <Card titulo="#6-Comunicação Direta" color="#384E77">
        <Pai sobrenome="Araujo"/>
      </Card>
      <Card titulo="#7-Comunicação Indireta" color="#EF767A">
        <Super/>  
      </Card>
      <Card titulo="#8-Input" color="#F0D0A0">
        <Input/>
      </Card>
      <Card titulo="#9-Contador" color="#F6AE2D">
        <Contador/>
      </Card>
      <Card titulo="#10-MegaSena" color="#F8AEdf">
        <Mega />
      </Card>
    </div>
  );
}