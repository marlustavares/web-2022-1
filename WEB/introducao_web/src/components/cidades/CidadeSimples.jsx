import React from 'react';

const CidadeSimples = () => {
    let fortaleza = 0 , quixada = 0 , limoeiro = 0 , crato = 0
    return(
        <div>
            <h2>Fortaleza: {fortaleza}</h2>
            <h2>Quixadá: {quixada}</h2>
            <h2>Limoeiro do Norte: {limoeiro}</h2>
            <h2>Crato: {crato}</h2>
            <button onClick={()=>fortaleza++}>Voltar em Fortaleza</button>
            <button onClick={()=>quixada++}>Voltar em Quixadá</button>
            <button onClick={()=>limoeiro++}>Voltar em Limoeiro do Norte</button>
            <button onClick={()=>crato++}>Voltar em Crato</button>

        </div>
    )
}

export default CidadeSimples