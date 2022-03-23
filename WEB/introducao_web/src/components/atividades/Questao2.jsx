import { Component } from "react"

//questao usando class
/*class Questao2 extends Component {
    render (){
        return(
            <div>
                <h3>Usando class</h3>
                <h1>nome : Marlus Tavares</h1>
                <h1>curso : Sistemas de Informação</h1>
                <h1>Cidade de origem : Quixadá</h1>
            </div>
        )
    }
}
*/






/*--------QUESTÃO 2 MODIFICADA PARA RESOLVER A QUESTÃO 4--------*/




//questão usando class com props 
class Questao2 extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {nome,curso,cidade} = this.props
        return(
            <div>
                <h3>Usando class com props</h3>
                <h1>Nome : {nome}</h1>
                <h1>curso : {curso}</h1>
                <h1>Cidade de origem : {cidade}</h1>
            </div>
        )
    }

}

export default Questao2