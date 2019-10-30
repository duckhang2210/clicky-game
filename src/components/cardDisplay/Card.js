import React from "react";
import "./Card.css";


function Card(props) {
    return (
        <img onClick={props.handlePicked} name={props.name} src={props.image} className="rounded float-left my-3 px-2" alt={props.name}></img>
    )
}

export default Card;