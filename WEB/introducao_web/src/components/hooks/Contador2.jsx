import React , {useState,useEffect} from "react";

const Contador2 = () => {
    const [cont,setCont] = useState(0);
    const [status,parImpar] = useState('par');

    useEffect(()=>{
        if(cont%2 == 0)
            parImpar('par');
        else
            parImpar('impar')
    },[cont])
    return(
        <div>
            <h1>Valor do contador : {cont} </h1>
            <h1>Status: {status} </h1>
            <button onClick ={()=>{
                setCont(cont+1)
            }}>Aumentar Pontuação
            </button>
        </div>

    )
}

export default Contador2