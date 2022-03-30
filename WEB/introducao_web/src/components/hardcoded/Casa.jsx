import React, { Component } from "react";
//import Personagem from "./Personagem";

//Usando class
class Casa extends Component{
    render(){
        return(
            <div>
                <h1>Casa:{this.props.casa}</h1>
                {React.Children.map(this.props.children,personagem => {
                    return React.cloneElement(personagem,{casa:this.props.casa,horario:this.props.horario});
                })}
            </div>
        )
    }
}


//Usando função Arrow
/*const Casa = (props) => {
    return(
        <div>
            <h1>Casa:{props.casa}</h1>
                {React.Children.map(props.children,personagem => {
                    return React.cloneElement(personagem,{...props});
                })}
        </div>
    )
}
*/

export default Casa