import React, { Component } from 'react';

class CidadeComClasse extends Component{
    constructor(props){
        super(props)
        this.state = {fortaleza:0,quixada:0,limoeiro:0,crato:0}
    }
    votarQuixada(){
        this.setState({quixada:this.state.quixada+1})
    }
    votarLimoeiro(){
        this.setState({limoeiro:this.state.limoeiro+1})
    }
    votarCrato(){
        this.setState({crato:this.state.crato+1})
    }

    render(){
        //let fortaleza = 0 , quixada = 0 , limoeiro = 0 , crato = 0
        return(
            <div>
                <h2>Fortaleza: {this.state.fortaleza}</h2>
                <h2>Quixadá: {this.state.quixada}</h2>
                <h2>Limoeiro do Norte: {this.state.limoeiro}</h2>
                <h2>Crato: {this.state.crato}</h2>
                <button onClick={() => this.setState({fortaleza:this.state.fortaleza+1})}>Votar em Fortaleza</button>
                <button onClick={()=>this.votarQuixada()}>Votar em Quixadá</button>
                <button onClick={()=>this.votarLimoeiro()}>Votar em Limoeiro do Norte</button>
                <button onClick={()=>this.votarCrato()}>Votar em Crato</button>

            </div>
        )
    }
}

export default CidadeComClasse