import * as React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <main>
                <h1>Welcome to the homepage!</h1>
                <p>Você pode acessar este site sempre que tiver dificuldade com Lógica de programação</p>
            </main>
            <nav>
                <Link to="/About">About</Link>
            </nav>
        </>
    );
}

export default Home