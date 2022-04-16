import * as React from "react";
import { Link } from "react-router-dom";

function Page1() {
    return (
        <>
            <main>
                <h1>Seja bem vindo a página 1</h1>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default Page1