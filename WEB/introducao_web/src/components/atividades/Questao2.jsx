import { Component } from "react"

//questao usando class
/*class Questao2 extends Component {
    render (){
        return(
            <div>
                <h3>Usando class</h3>
                <h1>nome : Marlus Tavares</h1>
                <h1>curso : Sistemas de Informacao</h1>
                <h1>Cidade de origem : Quixada</h1>
            </div>
        )
    }
}
*/






//Questao2 modificada para a questao 4

//questao usando class com props 
class Questao2 extends Component {
    construtor(props){
        super(props)
    }

    render() {
        const {nome,curso,cidade} = this.props
        return(
            <div>
                <h3>Usando class com props</h3>
                <h1>nome : {nome}</h1>
                <h1>curso : {curso}</h1>
                <h1>Cidade de origem : {cidade}</h1>
            </div>
        )
    }

}

export default Questao2