import React from "react";
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card'
import Familia from "./components/basicos/Familia";

export default (props) => {
    return (
        <div className="App">
                <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="Componente com filhos" color="#020">
                    <Familia sobrenome="Ferreira"/>
                </Card>
                <Card titulo="Fragmento" color="#080">
                    <Fragmento />
                </Card>
                <Card titulo="Com parâmetro" color="#070">
                    <ComParametro Titulo="Situação do aluno"
                        aluno="Pedro" nota="9.3"
                    />
                </Card>
                <Card titulo="Primeiro" color="#000">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}