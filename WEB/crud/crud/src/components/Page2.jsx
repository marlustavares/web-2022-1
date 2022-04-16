import * as React from "react";
import { Link, useParams } from "react-router-dom";

function Page2() {

    let params = useParams()

    return (
        <>
            <main>
                <h1>Seja bem vindo a página 2, id: {params.id}</h1>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default Page2