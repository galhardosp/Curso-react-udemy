import React from "react";
import Membro from'./Membro'

export default props =>{

    return(
        <div>
            <Membro nome="Pedro" sobrenome={props.sobrenome}/>
            <Membro nome="Ana" sobrenome={props.sobrenome} />
            <Membro nome="Gustavo"  sobrenome="Ferreira" />
        </div>
    )

}