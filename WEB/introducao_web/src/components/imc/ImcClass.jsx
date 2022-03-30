import React, { Component } from 'react';

//Usando class e criando funções internas
class ImcClass extends Component{
    ResultadoIMC(imc){
        if(imc <17){ return <h1>Muito abaixo do peso </h1> }
        else if(imc > 17 && imc < 18.49 ){return <h1>Abaixo do peso </h1> }
        else if(imc > 18.50 && imc < 24.99 ){return <h1>Peso normal </h1> }
        else if(imc > 25 && imc < 29.99 ){return <h1>Acima do peso </h1> }
        else if(imc > 30 && imc < 34.99 ){return <h1>Obesidade 1 </h1> }
        else if(imc > 35 && imc < 39.99 ){return <h1>Obesidade 2(severa) </h1> }
        else{return <h1>Obesidade 3(mórbida) </h1> }
    }
    CalcularIMC(altura,peso){
        return peso/(altura*altura);
    }

    render(){
        const imc = this.CalcularIMC(this.props.altura,this.props.peso)
        return(
            <div>
                <h1>Sua altura é {this.props.altura}m e seu peso é {this.props.peso}kg. </h1>
                <h1>Seu IMC é : {imc} </h1>
                <hr />
                <h1>Você está : {this.ResultadoIMC(imc)} </h1>
            </div>
        )
    }
}

export default ImcClass