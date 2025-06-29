import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card'

export default (props) => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Card titulo="Fragmento">
                <Fragmento />
            </Card>
            <Card titulo="Com parâmetro">
                <ComParametro Titulo="Situação do aluno"
                    aluno="Pedro" nota="9.3"
                />
            </Card>
            <Card titulo="Primeiro">
                <Primeiro />
            </Card>
        </div>
    )
}