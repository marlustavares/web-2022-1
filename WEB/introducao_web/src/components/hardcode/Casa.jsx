import { Component } from "react";
import Personagem from "./Personagem";

class Casa extends Component{
    render(){
        return(
            <div>
                <Personagem nome="Arya" casa="Stark" />
                <Personagem nome="Tyrion" casa="Lannister" />
                <Personagem nome="Robert" casa="Baratheon" />
            </div>
        )
    }
}

/*
const Casa = () => {
    return(){
        <div>
        
        </div>
    }
}
*/


export default Casa