import { Component } from "react";

class Personagem extends Component{
    render(){
        const { nome , casa } = this.props
        return(
            <div>
                <h1>Personagem {nome} da casa {casa}</h1>
            </div>
        )
    }
}


/*
const Personagem = (props) => {
    const {nome,casa} = props
    return(
        <div>
            <h1>Personagem {nome} da casa {casa}</h1>
        
        </div>
    )
}
*/


export default Personagem