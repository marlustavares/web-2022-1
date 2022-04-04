import React from "react";
import Enemyimg from "./../IMG/Tottenham_200.jpg"

function Enemy(props) {
    return (
        <div>
            <h1>Estádio do Tottenham</h1>
            <img src={Enemyimg} />
            <h1>Nome: {props.nome} / Arena : {props.arena} </h1>
        </div>
    )
}

export default Enemy