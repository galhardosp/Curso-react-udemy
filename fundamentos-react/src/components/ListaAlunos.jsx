import React from "react";
import Alunos from "../data/Alunos";

export default (props) => {

    const lis = Alunos.map(aluno => {

        return(
        <li>
            {aluno.id} {aluno.nome} {aluno.nota}
        </li>
        )
    }
    )

    return (
        <div>
            <ul>
                {lis}
            </ul>
        </div>
    )
}