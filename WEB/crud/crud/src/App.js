import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
//import "./App.css";

import Home from "./components/Home";
import Edit from "./components/Edit";
import Create from "./components/Create";
import List from "./components/List";

//import About from "./components/About";
//import Page1 from "./components/Page1";
//import Page2 from "./components/Page2";

function App() {
  return (
    <div className="container" >
      <h1>olha o nosso site</h1>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navitem">
              <Link to="/Create" className="nav-link">Create</Link>
            </li>
            <li className="navitem">
              <Link to="List" className="nav-link">
                List
              </Link>
            </li>
            <li className="navitem">
              <Link to="/Edit" className="nav-link">
                Edit
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="list" element={<List />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
}


export default App