import React from "react";
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card'
import Familia from "./components/basicos/Familia";
import Membro from "./components/basicos/Membro"
import ListaAlunos from "./components/ListaAlunos";
import TabelaProdutos from "./components/TabelaProdutos";

export default (props) => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <Card titulo="Desafio" color="#080">
                <TabelaProdutos />
            </Card>
            <Card titulo="Lista ALunos" color="#080">
                <ListaAlunos />
            </Card>
            <div className="Cards">
                <Card titulo="Componente com filhos" color="#020">
                    <Familia sobrenome="Ferreira">
                        <Membro nome="Pedro" />
                        <Membro nome="Ana" />
                        <Membro nome="Gustavo" />
                    </Familia>
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
        </div >
    )
}