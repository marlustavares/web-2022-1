import React, { useState, useEffect } from "react";
import { Link , useParams , useNavigate } from "react-router-dom";
//import axios from "axios";
//import { students } from "./data.js";

import FirebaseContext from "../../../utis/FirebaseContext";
import FirebaseStudentService from "../../../services/FirebaseStudentService";
import RestrictPage from "../../../utis/RestrictPage";

const EditStudentPage = () =>
<FirebaseContext.Consumer>
    {
        (firebase) => {
            return (
                <RestrictPage 
                    isLogged={firebase.getUser()!=null}
                    isEmailVerified={(firebase.getUser() != null)?firebase.getUser().emailVerified:false}
                    auth={firebase.getAuthentication()}
                    >
                    <EditStudent firebase={firebase}/>
                </RestrictPage>
            )
        }
    }
</FirebaseContext.Consumer>

const EditStudent = (props) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(
    () => {
        //axios.get('http://localhost:3001/students/' + params.id)
        /*axios.get('http://localhost:3002/crud/students/retrieve/' + params.id)
            .then(
                (res) => {
                    setName(res.data.name)
                    setCourse(res.data.course)
                    setIra(res.data.ira)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
        */
            FirebaseStudentService.retrieve(
              props.firebase.getFirestoreDb(),
              (data) => {
                  setName(data.name)
                  setCourse(data.course)
                  setIra(data.ira)
              },
              params.id
          )

    }
    ,
    [params.id,props.firebase]
  ) 

  const handleSubmit = (event) => {
    event.preventDefault()
    const updatedStudent = { name, course, ira }
    //axios.put('http://localhost:3001/students/' + params.id, updatedStudent)
    /*axios.put('http://localhost:3002/crud/students/update/' + params.id, updatedStudent)
        .then(
            res => {
                //console.log(res.data)
                //props.history.push('/listStudent');
                //console.log(props)
                navigate("/listStudent")
            }
        )
        .catch(error => console.log(error))
    */
        FirebaseStudentService.update(
          props.firebase.getFirestoreDb(),
          (ok)=>{
              if(ok) navigate("/listStudent")
          },
          params.id,
          updatedStudent
      )
}

  return (
    <>
      <main>
        <h2>Editar Estudante</h2>
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
            <label>Curso</label>
            <input
              type="text"
              className="form-control"
              value={(course == null || course === undefined) ? "" : course}
              name="course"
              onChange={(event) => setCourse(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>IRA</label>
            <input
              type="text"
              className="form-control"
              value={(ira == null || ira === undefined) ? "" : ira}
              name="ira"
              onChange={(event) => setIra(event.target.value)}
            />
          </div>
          <div className="form-group" style={{ paddingTop: 10 }}>
            <input type="submit" value="Editar Estudante" className="btn btn-primary" />
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
    const student = students[params.id];
    setName(student.name);
    setCourse(student.course);
    setIra(student.ira);
  },[params.id]);

  const handleSubmit = (event) => {
    //aqui c??digo de comunica????o com o backend
    alert(`Nome: ${name} \nCurso: ${course}\nIRA: ${ira}`);
  };
*/
export default EditStudentPage;
