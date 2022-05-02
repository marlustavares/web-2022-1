import React, { useState, useEffect } from "react";
import { Link , useParams , useNavigate } from "react-router-dom";
import axios from "axios";
//import { teachers } from "./data.js";

const EditTeacher = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [degree, setDegree] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(
    () => {

        //axios.get('http://localhost:3001/teacher/' + params.id)
        axios.get('http://localhost:3002/crud/teacher/retrieve/' + params.id)
            .then(
                (res) => {
                    setName(res.data.name)
                    setDepartment(res.data.department)
                    setDegree(res.data.degree)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )

    }
    ,
    [params.id]
  ) 

  const handleSubmit = (event) => {
    event.preventDefault()
    const updatedTeacher = { name, department, degree }
    //axios.put('http://localhost:3001/students/' + params.id, updatedStudent)
    axios.put('http://localhost:3002/crud/teacher/update/' + params.id, updatedTeacher)
        .then(
            res => {
                //console.log(res.data)
                //props.history.push('/listTeacher');
                //console.log(props)
                navigate("/listTeacher")
            }
        )
        .catch(error => console.log(error))
  }

  return (
    <>
      <main>
        <h2>Editar Professor</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              className="form-control"
              value={name == null || name === undefined ? "" : name}
              name="name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Departamento</label>
            <input
              type="text"
              className="form-control"
              value={department ?? ""}
              name="department"
              onChange={(event) => setDepartment(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Titularidade</label>
            <input
              type="text"
              className="form-control"
              value={degree ?? ""}
              name="degree"
              onChange={(event) => setDegree(event.target.value)}
            />
          </div>
          <div className="form-group" style={{ paddingTop: 10 }}>
            <input type="submit" value="Editar Professor" className="btn btn-primary" />
          </div>
        </form>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

/*
useEffect(() => {
    const teacher = teachers[params.id];
    setName(teacher.name);
    setDepartment(teacher.department);
    setDegree(teacher.degree);
  },[params.id]);

const handleSubmit = (event) => {
    //aqui código de comunicação com o backend
    alert(`Nome: ${name} \nDepartamento: ${department}\nTitularidade: ${degree}`);
  };

*/

export default EditTeacher;
