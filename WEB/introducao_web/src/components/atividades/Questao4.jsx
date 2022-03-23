import React, { Component } from "react";
import Questao2 from "./Questao2";

//Essa questão usa a questão 2
class Questao4 extends Component {
    render () {
        return(
            <Questao2
                nome = "Paulo Ricardo"
                curso = "Engenharia Civil"
                cidade = "Fortaleza"
            />
        )
    }
}

export default Questao4