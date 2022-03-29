import React, { Component } from "react";
//import Personagem from "./Personagem";

class Casa extends Component{
    render(){
        return(
            <div>
                <h1>Casa:{this.props.casa}</h1>
                {React.Children.map(this.props.children,personagem => {
                    return React.cloneElement(personagem,{...this.props});
                })}
            </div>
        )
    }
}

/*
<Personagem nome="Arya" casa="Stark" horario="horário nobre" />
<Personagem nome="Tyrion" casa="Lannister" horario="horário nobre"/>
<Personagem nome="Robert" casa="Baratheon" horario="horário nobre"/>
*/

/*
const Casa = () => {
    return(){
        <div>
        
        </div>
    }
}
*/


export default Casa