import { Component } from 'react';
import './App.css';
//import Informacoes from './components/Informacoes';

//import MeusDados from './components/MeusDados';
//import MeusDadosProps from './components/MeusDadosProps';

//import Questao1 from './components/atividades/Questao1';
//import Questao2 from './components/atividades/Questao2';
//import Questao3 from './components/atividades/Questao3';
//import Questao4 from './components/atividades/Questao4';
//import{CapitaoAmerica as Ca,ViuvaNegra as Vn} from './components/Vingadores';
//import Casa from './components/hardcoded/Casa';
//import Personagem from './components/hardcoded/Personagem';
//import IMC from './components/imc/Imc';
//import IMCCLASS from './components/imc/ImcClass';
//import Filho from './components/filhoPai/Filho';
//import Pai from './components/filhoPai/Pai';
//import CidadeSimples from './components/cidades/CidadeSimples';
//import CidadeComClasse from './components/cidades/CidadeComClasse';


//import Arena from './components/Ap01/questao1/Arena';
//import World from './components/Ap01/questao3/World';
//import Arena2 from './components/Ap01/questao4/Arena2';
//import Hero from './components/Ap01/questao1/Hero';
import Enemy from './components/Ap01/questao1/Enemy';
import Contador from './components/hooks/Contador';
import Contador2 from './components/hooks/Contador2';


function App(){
  return(
    <div className="App">
      <Contador2 />
    </div>
  )
}


/*
function App(){
  return(
    <div className="App">
      <World>
          <Arena2 arena="Arena Castelão">
            <Hero nome="Paulo" />
            <Enemy nome="Felipe" />
          </Arena2>
        </World>
    </div>
  )
}*/

/* questão1
<div className="App">
        <Arena />
    </div>
*/

/*questao2*/
/*
function App(){
  return (
  <div className="App">
          <World>
            <Arena />
            <Arena />
            <Arena />
          </World>
  </div>
  )
}
*/




/*
function App(){
  return(
    <div className="App">
        <CidadeComClasse />
    </div>
  )
}
*/



/*
function App(){
  return(
    <div className="App">
        <Pai />
    </div>
  )
}*/


/*
function App(){
  return(
    <div className="App">
        <IMCCLASS altura={1.84} peso={80} />
    </div>
  )
}
*/





/*------------------------PRIMEIRA AULA------------------------*/
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








/*------------------------SEGUNDA AULA------------------------*/


/*----------------QUESTÃO 1----------------*/
//Função clássica
/*function App() {
  return(
    <div className='App'>
      <Questao1 />
      
    </div>
  )
}
*/


/*----------------QUESTÃO 2----------------*/
//usando class
/*function App() {
  return(
    <div className='App'>
      <Questao2 />
      
    </div>
  )
}
*/


/*----------------QUESTÃO 3----------------*/
//essa questão usa props
/*function App() {
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
*/


/*----------------QUESTÃO 4----------------*/
//Essa função usa props
/*function App() {
  return(
    <div className='App'>
      <Questao4 />
    </div>
  )
}
*/



/*------------------------TERCEIRA AULA------------------------*/

//criando vários componentes e exponando-os de um arquivo só
/*
function App(){
  return(
    <div className="App">
      <Ca
        nome="Marlus"
      />
      <Vn
        nome="Lucas"
      />
    </div>
  )
}
*/

//Conteúdo : Hardcoded,passando atributos do pai para filhos
/*
function App(){
  return(
    <div className="App">
      <Casa casa="Stark" horario="horario nobre">
        <Personagem nome="Arya" />
        <Personagem nome="Tyrion" />
        <Personagem nome="Robert" />
        <Personagem nome="G.R.R.M" />
      </Casa>
    </div>
  )
}
*/

export default App;