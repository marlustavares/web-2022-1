import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

//import { students } from "./data";
import StudentTableRow from "./StudentTableRow";

import FirebaseContext from "../../../utis/FirebaseContext";
import FirebaseStudentService from "../../../services/FirebaseStudentService";

const ListStudentPage = () =>
<FirebaseContext.Consumer>
    {
        (Firebase)=>{
            return <ListStudent firebase={Firebase}/>
        }
    }
</FirebaseContext.Consumer>

const ListStudent = (props) => {
  const [students, setStudents] = useState([])

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
       
       FirebaseStudentService.list_onSnapshot(
                props.firebase.getFirestoreDb(),
                (students)=>{
                    //console.log(students)
                    setStudents(students)
                }
            )
        }
        ,
        []
    )

    function deleteStudentById(id){
      let studentsTemp = students
      for(let i=0;i<studentsTemp.length;i++){
          if(studentsTemp[i]._id === id){
              //console.log("1")
              studentsTemp.splice(i,1)
          }
      }
      setStudents([...studentsTemp]) //deve-se criar um outro array para disparar o re-render
      //setFlag(!flag)
  }

    function generateTable() {
      if (!students) return;
      return students.map((student, i) => {
        return <StudentTableRow student={student} key={i} deleteStudentById={deleteStudentById} firestore={props.firebase.getFirestoreDb()} />;
      });
    }

  return (
    <>
      <main>
        <h2>Listar Estudante</h2>
        <table className="table table-striped">
          <thead>
            <th>ID</th>
            <th>Nome</th>
            <th>Curso</th>
            <th>IRA</th>
            <th colSpan="2"></th>
          </thead>
          <tbody>{generateTable()}</tbody>
        </table>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

export default ListStudentPage;