import React from 'react';

const CapitaoAmerica = (props) =>{
    return(
    <div>
      <h3>Capitão América</h3>
      <h1>Olá {props.nome},eu sou o Capitão América</h1>
    </div>
    )    
}

const ViuvaNegra = (props) =>{
    return(
        <div>
            <h3>Viúva Negra</h3>
            <h1>Olá {props.nome},eu sou a Viúva Negra</h1>
        </div>
    )
}

export {CapitaoAmerica,ViuvaNegra};