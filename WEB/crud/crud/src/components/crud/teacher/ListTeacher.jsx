import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//import { teacher } from "./data";
import TeacherTableRow from "./TeacherTableRow";

const ListTeacher = () => {
  const [teacher, setTeacher] = useState([])

    useEffect(
        () => {
            //com Json-Server fica assim : axios.get("http://localhost:3001/teacher")
            axios.get("http://localhost:3002/crud/teacher/list")
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
        }
        ,
        []
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

    function generateTable() {
      if (!teacher) return;
      return teacher.map((teacher, i) => {
        return <TeacherTableRow teacher={teacher} key={i} deleteTeacherById={deleteTeacherById} />;
      });
    }

  return (
    <>
      <main>
        <h2>Listar Professor</h2>
        <table className="table table-striped">
          <thead>
            <th>ID</th>
            <th>Nome</th>
            <th>Departamento</th>
            <th>Titularidade</th>
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

/*
const ListTeacher = () => {
  function generateTable() {
    if (!teachers) return;
    return teachers.map((teacher, i) => {
      return <TeacherTableRow teacher={teacher} key={i} />;
    });
  }
*/

export default ListTeacher;