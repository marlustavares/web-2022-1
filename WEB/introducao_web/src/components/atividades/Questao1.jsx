import React from "react";

//1° maneira : Criando uma função clássica
/*function Questao1() {
  return (
    <div className="App">
      <h3>Usando funcao clássica</h3>
      <h1>nome : Marlus Tavares</h1>
      <h1>curso : Sistemas de Informação</h1>
      <h1>Cidade de origem : Quixadá</h1>
    </div>
  )
}

//2° maneira : Constante que recebe uma função arrow
/*const Questao1 = () => {
  return (
    <div className="App">
      <h3>Usando funções Arrow</h3>
      <h1>Nome : Marlus Tavares</h1>
      <h1>Curso : Sistemas de Informação</h1>
      <h1>Cidade de origem : Quixadá</h1>
    </div>
  )
}
*/





/*--------QUESTÃO 1 MODIFICADA PARA RESOLVER  QUESTÃO 3--------*/



//função arrow versão 1
const Questao1 = (props) => {
    return (
      <div>
        <h3>Usando funções Arrow com props versao 1</h3>
        <h1>Nome : {props.nome}</h1>
        <h1>Curso : {props.curso}</h1>
        <h1>Cidade de origem : {props.cidade}</h1>
      </div>
    )
  }
  

//Constante que recebe uma função arrow versão 2
/*const Questao1 = (props) => {
    const {nome,curso,cidade} = props
    return (
      <div>
        <h3>Usando funções Arrow com props versao 2</h3>
        <h1>Nome : {nome}</h1>
        <h1>Curso : {curso}</h1>
        <h1>Cidade de origem : {cidade}</h1>
      </div>
    )
  }
*/

export default Questao1