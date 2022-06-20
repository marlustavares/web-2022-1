import React from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

import FirebaseStudentService from "../../../services/FirebaseStudentService";

const StudentTableRow = (props) => {
  const { _id, name, course, ira } = props.student;

  function deleteStudent() {
    if (window.confirm(`Deseja realmente excluir o elemento de ID: ${_id}?`)) {
        //axios.delete(`http://localhost:3001/students/${_id}`)
        /*axios.delete(`http://localhost:3002/crud/students/delete/${_id}`)
            .then(response => props.deleteStudentById(_id))
            .catch(error => console.log(error))
        */
        FirebaseStudentService.delete(
          props.firestore,
            (ok)=>{
                if (ok) console.log('Apagado com sucesso!')
            },
            _id
        )
    }
  }
  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{course}</td>
      <td>{ira}</td>
      <td style={{textAlign:"center"}}>
        <Link to={`/editStudent/${_id}`} className="btn btn-warning">
          Editar
        </Link>
      </td>
      <td style={{textAlign:"center"}}>
        <button className="btn btn-danger"  onClick={() => deleteStudent()} >Apagar</button>
      </td>
    </tr>
  )
}

export default StudentTableRow