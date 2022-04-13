import React , {useState} from "react";

const Contador = () => {
    //let contador = 0;
    const [cont,setCont] = useState(0);
    return(
        <div>
            <h1>Valor do contador : {cont} </h1>
            <button onClick ={()=>{
                //console.log(contador)
                setCont(cont+1)
            }}>Aumentar Pontuação
            </button>
        </div>

    )
}

export default Contador