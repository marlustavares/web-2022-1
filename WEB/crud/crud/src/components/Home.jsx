import * as React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <main>
                <h2>Seja bem vindo a página Home!</h2>
                <p>Este é um site preocupado suas finanças</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}

export default Home




/*import React, { Component } from 'react';
class Home extends Component{
    render(){
        return(
            <div>
                <p>Aqui é a página Home Component</p>
            </div>
        )
    }
}

export default Home
*/