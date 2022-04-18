import * as React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <main>
        <h2>Quem somos nós?</h2>
        <p>Isso é uma pergunta muito complexa?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About;
