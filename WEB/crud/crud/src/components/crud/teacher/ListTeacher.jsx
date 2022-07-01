import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
//import axios from "axios";

//import { teacher } from "./data";
import TeacherTableRow from "./TeacherTableRow";

import FirebaseContext from "../../../utis/FirebaseContext";
import FirebaseTeacherService from "../../../services/FirebaseTeacherService";

const ListTeacherPage = () =>
<FirebaseContext.Consumer>
    {
        (firebase)=>{
            return <ListTeacher firebase={firebase}/>
        }
    }
</FirebaseContext.Consumer>

const ListTeacher = (props) => {
  const [teacher, setTeacher] = useState([])
  const [loading, setLoading] = useState(false)

    useEffect(
        () => {
            //com Json-Server fica assim : axios.get("http://localhost:3001/teacher")
            /*axios.get("http://localhost:3002/crud/teacher/list")
                .then(
                    (res) => {
                        setTeacher(res.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
            */
          setLoading(true)
          FirebaseTeacherService.list_onSnapshot(
            props.firebase.getFirestoreDb(),
            (teachers)=>{
              //console.log(teachers)
              setLoading(false)
              setTeacher(teachers)
            }
          )
        }
        ,
        [props.firebase]
    )

    function deleteTeacherById(id){
      let teacherTemp = teacher
      for(let i=0;i<teacherTemp.length;i++){
          if(teacherTemp[i]._id === id){
              //console.log("1")
              teacherTemp.splice(i,1)
          }
      }
      setTeacher([...teacherTemp]) //deve-se criar um outro array para disparar o re-render
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
                <th>Departamento</th>
                <th>Titularidade</th>
                <th colSpan="2"></th>
                </tr>
              </thead>
              <tbody>{generateTable()}</tbody>
            </table>
      )
    }

    function generateTable() {
      if (!teacher) return;
      return teacher.map((teacher, i) => {
        return <TeacherTableRow teacher={teacher} key={i} deleteTeacherById={deleteTeacherById} firestore={props.firebase.getFirestoreDb()} />;
      });
    }

  return (
    <>
      <main>
        <h2>
          Listar Professor
        </h2>
        {renderTable()}
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

/*
const ListTeacher = () => {
  function generateTable() {
    if (!teachers) return;
    return teachers.map((teacher, i) => {
      return <TeacherTableRow teacher={teacher} key={i} />;
    });
  }
*/

export default ListTeacherPage;