import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { teachers } from "./data.js";

const EditTeacher = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [degree, setDegree] = useState("");

  const params = useParams();

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

  return (
    <div>
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
          <input
            type="submit"
            value="Editar Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditTeacher;
