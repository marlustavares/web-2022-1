import React from "react";
import Heroimg from "./../IMG/Estadio-Wembley_200.png"

function Hero(props){
    return (
        <div>
            <h1>Estádio Wembley </h1>
            <img className="HeroImg" src={Heroimg} />
            <h1>Nome: {props.nome} / Arena : {props.arena} </h1>
        </div>
    )
}

export default Hero