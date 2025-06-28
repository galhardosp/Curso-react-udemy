import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Primeiro />
        <ComParametro PrimeiroComponente="Primeiro Componente"
        SegundoComponente="Segundo Componente"
        />
    </div>
)