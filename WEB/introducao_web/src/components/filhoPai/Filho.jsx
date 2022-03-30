import { Component } from "react";

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

const Filho = (props) => {
    return(
        <div>
            <button className="Ap" onClick={
                ()=>{
                    //alert('Acorda menino')
                    props.notificarPai('Oi Pai,tudo Bem?',100)
                }
            }>Enviar mensagem para o Pai</button>
        </div>
    )
}

export default Filho