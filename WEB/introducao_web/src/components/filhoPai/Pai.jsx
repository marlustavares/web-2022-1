import { Component } from "react";
import Filho from "./Filho";

/*
class Informacoes extends Component {
    render() {
        return (
            <div>
                <h4>Nome: {this.props.nome} </h4>
                <h4>Curso: {this.props.curso} </h4>
                <h4>Turno: {this.props.turno} </h4>
                <h4>Universidade: {this.props.universidade} </h4>
            </div>
        )
    }
}
*/

const Pai = () => {
    function mensagemRecebidaDoMeuFilho(msg,grana){
        alert(`Recebi do meu filho: ${msg}, Pediu emprestado : ${grana} `)
        //alert("Recebi do meu filho: "+ msg + "Pediu emprestado : " + grana)
    }
    return(
        <div>
            <Filho notificarPai = {mensagemRecebidaDoMeuFilho}/>
        </div>
    )
}

export default Pai