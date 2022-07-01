import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
//import axios from "axios";

import FirebaseContext from "../../../utis/FirebaseContext";
import FirebaseTeacherService from "../../../services/FirebaseTeacherService";

const CreateTeacherPage = () =>
<FirebaseContext.Consumer>
    { firebase => <CreateTeacher firebase={firebase}/>}
</FirebaseContext.Consumer>

const CreateTeacher = (props) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [degree, setDegree] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()

    const newTeacher = { name, department, degree }
    //axios.post('http://localhost:3001/teacher', newTeacher)
    /*axios.post('http://localhost:3002/crud/teacher/create', newTeacher)
        .then(
            (res) => {
                console.log(res.data._id)
                alert(`Professor ${res.data._id} : ${name} criado com sucesso.`)
                navigate("/listTeacher")
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
      */
        FirebaseTeacherService.create(
          props.firebase.getFirestoreDb(),
          (_id)=>{
           //console.log(res.data._id)
            alert(`Professor ${name} criado com sucesso com id ${_id}.`)
            navigate("/listTeacher")
          },
          newTeacher
      )

    console.log(name)
    console.log(department)
    console.log(degree)
  }

  return (
    <>
      <main>
        <h2>Criar Professor</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input type="text" className="form-control"
              value={name == null || name === undefined ? "" : name} name="name"
              onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="form-group">
            <label>Departamento</label>
            <input type="text" className="form-control" value={(department == null || department === undefined) ? "" : department}
              name="department" onChange={(event) => setDepartment(event.target.value)} />
          </div>
          <div className="form-group">
            <label>Titularidade</label>
            <input type="text" className="form-control" value={(degree == null || degree === undefined) ? "" : degree} name="degree"
              onChange={(event) => setDegree(event.target.value)} />
          </div>
          <div className="form-group" style={{ paddingTop: 10 }}>
            <input type="submit" value="Criar Professor" className="btn btn-primary" />
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
const handleSubmit = (event) => {
    //aqui  é o código de comunicação com o backend
    alert(`Nome: ${name} \nDepartamento: ${department}\nTitularidade: ${degree}`);
  };
*/

export default CreateTeacherPage;
