import React from "react";

function AlertArea(props) {
    return(
    <div>
        <h1 style={{color: "white"}}>{props.alertMessage}</h1>
        <p style={{color: "white"}}>Score: {props.score}</p>
        <p style={{color: "white"}}>Top Score: {props.topScore}</p>
    </div>
    )
}

export default AlertArea;