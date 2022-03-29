import React, { Component } from "react";

class Personagem extends Component{
    render(){
        const {nome,casa,horario} = this.props
        return(
            <div>
                <h1>Personagem {nome} da casa {casa} no horário {horario}</h1>
            </div>
        )
    }
}


/*
const Personagem = (props) => {
    const {nome,casa,horario} = props
    return(
        <div>
            <h1>Personagem {nome} da casa {casa} no horário {horario}</h1>
        </div>
    )
}
*/

export default Personagem