import React from "react";
import Produtos from "../data/Produtos";

export default (props) =>{


    const Prod = Produtos.map(variavel =>
    {
        return(
            <li>{variavel.id} {variavel.nome} {variavel.preco}</li>
        )
    }
    )

    return(
        <ul>
            {Prod}
        </ul>
    )
}