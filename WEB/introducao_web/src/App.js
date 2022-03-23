import { Component } from 'react';
import './App.css';
//import Informacoes from './components/Informacoes';

//import MeusDados from './components/MeusDados';
//import MeusDadosProps from './components/MeusDadosProps';

//import Questao1 from './components/atividades/Questao1';
//import Questao2 from './components/atividades/Questao2';
import Questao3 from './components/atividades/Questao3';


//Questao1,primeira parte segunda aula
/*function App() {
  return(
    <div className='App'>
      <Questao1 />
      
    </div>
  )
}
*/
//Questao1,segunda parte,segunda aula  
/*function App() {
  return(
    <div className='App'>
      <Questao1 />
      
    </div>
  )
}
*/

//Questao2,segunda aula  
/*function App() {
  return(
    <div className='App'>
      <Questao2 />
      
    </div>
  )
}
*/

//Questao3,segunda aula  
function App() {
  return(
    <div className='App'>
      <Questao3
        nome="Marlus Tavares"
        curso="Sistemas de Informacao"
        cidade="Quixada"
      />
    </div>
  )
}



//aula de segunda
/*
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
*/

/*
function App() {
  return(
    <div className='App'>
      <MeusDados />
      <MeusDadosProps
        nome="Marlus"
        curso="Sistemas de Informacao"
      />
      <Informacoes
        nome='Fulano'
        curso='Si'
        turno='Manha'
        universidade='UFC'
      />
    </div>
  )
}
*/

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