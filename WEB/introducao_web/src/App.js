import { Component } from 'react';
import './App.css';
import Informacoes from './components/Informacoes';

import MeusDados from './components/MeusDados';
//import MeusDadosProps from './components/MeusDadosProps';

function App() {
  return(
    <div classname = 'App'>
      <Informacoes
        nome = 'Marlus Tavares'
        curso = 'SI'
        turno = 'Manha'
        universidade ='UFC - Campus Quixada'
      />
    </div>
  )
}

//Crinado uma função clássica
/*function App() {
  return (
    <div className="App">
      <h3>Usando funcao classica</h3>
      <h1>nome : Marlus Tavares</h1>
      <h1>curso : Sistemas de Informacao</h1>
      <h1>Dusciplina : Desenvolvimento de software para WEB</h1>
    </div>
  );
}
*/

//Constante que recebe uma função arrow
/*const App = () => {
  return (
    <div className="App">
      <h3>Usando funções Arrow</h3>
      <h1>Nome : Marlus Tavares</h1>
      <h1>Curso : Sistemas de Informacao</h1>
      <h1>Disciplina : Desenvolvimento de software para WEB</h1>
    </div>
  )
}*/

//Constante que recebe uma função arrow e sem o uso das {} e do return (),visto que nessa função há somente uma instrução
/*const App = () =>
  <div className="App">
    <h3>Usando funções Arrow</h3>
    <h1>Nome : Marlus Tavares</h1>
    <h1>Curso : Sistemas de Informacao</h1>
    <h1>Disciplina : Desenvolvimento de software para WEB</h1>
  </div>
*/

//Criando através por classes
/*class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Usando Classes</h3>
        <h1>Nome : Marlus Tavares</h1>
        <h1>Curso : Sistemas de Informacao</h1>
        <h1>Disciplina : Desenvolvimento de software para WEB</h1>
      </div>
    )
  }
}
*/

export default App;
