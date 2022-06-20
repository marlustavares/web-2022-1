import React from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

import FirebaseTeacherService from "../../../services/FirebaseTeacherService";

const TeacherTableRow = (props) => {
const { _id, name, department, degree } = props.teacher;

  function deleteTeacher() {
    if (window.confirm(`Deseja realmente excluir o elemento de ID: ${_id}?`)) {
        //axios.delete(`http://localhost:3001/teacher/${_id}`)
        /*axios.delete(`http://localhost:3002/crud/teacher/delete/${_id}`)
            .then(response => props.deleteTeacherById(_id))
            .catch(error => console.log(error))
        */
            FirebaseTeacherService.delete(
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
      <td>{department}</td>
      <td>{degree}</td>
      <td style={{textAlign:"center"}}>
        <Link to={`/editTeacher/${_id}`} className="btn btn-warning">
          Editar
        </Link>
      </td>
      <td style={{textAlign:"center"}}>
        <button className="btn btn-danger" onClick={() => deleteTeacher()}>Apagar</button>
      </td>
    </tr>
  );
};
export default TeacherTableRow;
