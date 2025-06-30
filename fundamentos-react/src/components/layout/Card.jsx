import React from "react";
import './Card.css';
export default props => {

    const CardStyle = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return (
        <div className="Card" style={CardStyle}>
            <div className="title">
                {props.titulo}
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )

}