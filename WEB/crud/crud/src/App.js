import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import 'bootstrap/dist/js/bootstrap.bundle.min';

//import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import CreateStudent from "./components/crud/student/CreateStudent";
import ListStudent from "./components/crud/student/ListStudent";
import EditStudent from "./components/crud/student/EditStudent";

import CreateTeacher from "./components/crud/teacher/CreateTeacher";
import EditTeacher from "./components/crud/teacher/EditTeacher";
import ListTeacher from "./components/crud/teacher/ListTeacher";

//import Page1 from "./components/Page1";
//import Page2 from "./components/Page2";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          PROJETO CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Aluno
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link to="/createStudent" className="dropdown-item">
                    Criar Estudante
                  </Link>
                </li>
                <li>
                  <Link to="/listStudent" className="dropdown-item">
                    Listar Estudante
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Professor
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link to="/createTeacher" className="dropdown-item">
                    Criar Professor
                  </Link>
                </li>
                <li>
                  <Link to="/listTeacher" className="dropdown-item">
                    Listar Professor
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />

        <Route path="createTeacher" element={<CreateTeacher />} />
        <Route path="listTeacher" element={<ListTeacher />} />
        <Route path="editTeacher/:id" element={<EditTeacher />} />
      </Routes>
    </div>
  );
}

export default App;




