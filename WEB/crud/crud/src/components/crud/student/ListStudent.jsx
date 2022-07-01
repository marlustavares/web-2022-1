import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
//import axios from "axios";

//import { students } from "./data";
import StudentTableRow from "./StudentTableRow";

import FirebaseContext from "../../../utis/FirebaseContext";
import FirebaseStudentService from "../../../services/FirebaseStudentService";
import RestrictPage from "../../../utis/RestrictPage";

const ListStudentPage = () =>
    <FirebaseContext.Consumer>
        {
            (firebase) => {
                return (
                    <RestrictPage 
                        isLogged={firebase.getUser() != null}
                        isEmailVerified={(firebase.getUser() != null)?firebase.getUser().emailVerified:false}
                        auth={firebase.getAuthentication()}
                        >
                        <ListStudent firebase={firebase} />
                    </RestrictPage>
                )
            }
        }
    </FirebaseContext.Consumer>
    
const ListStudent = (props) => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(
    () => {
      /*
        //Com Json-Server usa assim : axios.get("http://localhost:3001/students")
        axios.get("http://localhost:3002/crud/students/list")
            .then(
                (res) => {
                    setStudents(res.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    */
      setLoading(true)
      FirebaseStudentService.list_onSnapshot(
        props.firebase.getFirestoreDb(),
        (students) => {
          //console.log(students)
          setLoading(false)
          setStudents(students)
        }
      )
    }
    ,
    [props.firebase]
  )

  function deleteStudentById(id) {
    let studentsTemp = students
    for (let i = 0; i < studentsTemp.length; i++) {
      if (studentsTemp[i]._id === id) {
        //console.log("1")
        studentsTemp.splice(i, 1)
      }
    }
    setStudents([...studentsTemp]) //deve-se criar um outro array para disparar o re-render
    //setFlag(!flag)
  }

  function renderTable() {
    if (loading) {
      //mostrar um spinner!
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 100
        }}>
          <div className="spinner-border"
            style={{ width: '3rem', height: '3rem' }}
            role="status" />
          Carregando...
        </div>
      )
    }

    return (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Curso</th>
                <th>IRA</th>
                <th colSpan="2"></th>
              </tr>
            </thead>
            <tbody>{generateTable()}</tbody>
          </table>
    )
  }

    function generateTable() {
      if (!students) return;
      return students.map((student, i) => {
        return <StudentTableRow student={student} key={i} deleteStudentById={deleteStudentById} firestore={props.firebase.getFirestoreDb()} />
      })
    }

    return (
      <>
        <main>
          <h2>
            Listar Estudantes
          </h2>
          {renderTable()}
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );

}

export default ListStudentPage;