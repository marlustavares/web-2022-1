import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
//import axios from "axios";

import FirebaseContext from "../../../utis/FirebaseContext";
import FirebaseStudentService from "../../../services/FirebaseStudentService";
import RestrictPage from "../../../utis/RestrictPage"

const CreateStudentPage = ({ setShowToast, setToast }) =>
    <FirebaseContext.Consumer>
        {
            (firebase) => {
                return (
                    <RestrictPage 
                        isLogged={firebase.getUser() != null}
                        isEmailVerified={(firebase.getUser() != null)?firebase.getUser().emailVerified:false}
                        auth={firebase.getAuthentication()}
                        >
                        <CreateStudent
                            firebase={firebase}
                            setShowToast={setShowToast}
                            setToast={setToast}
                        />
                    </RestrictPage>
                )
            }
        }
    </FirebaseContext.Consumer>

const CreateStudent = ({firebase,setShowToast,setToast}) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIRA] = useState(0);
  const [loading, setLoading] = useState(false)
  const [validate, setValidate] = useState({name:'',course:'',ira:''})
  const navigate = useNavigate()

  const validateFields = () => {
    let res = true //os campos estão ok!
    let validateObj = {name:'',course:'',ira:''}
    setValidate(validateObj)
    if(name === '' || course === '' || ira === ''){
        res = false

        setToast({header:'Atenção!',body:'Preencha todas os campos',bg:'warning'})
        setShowToast(true)
        
        
        if(name === '') validateObj.name = 'is-invalid'
        if(course === '') validateObj.course = 'is-invalid'
        if(ira === '') validateObj.ira = 'is-invalid'
        setValidate(validateObj)
    }

    if(ira !== '' && (ira < 0 || ira > 10)){
        res = false

        setToast({header:'Atenção!',body:'O campo IRA deve ser entre 0 e 10',bg:'warning'})
        setShowToast(true)

        validateObj.ira = 'is-invalid'
        setValidate(validateObj)
    }

    return res
}

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!validateFields()) return

    setLoading(true)
    const newStudent = { name, course, ira }
    //axios.post('http://localhost:3001/students', newStudent)
    /*axios.post('http://localhost:3002/crud/students/create', newStudent)
        .then(
            (res) => {
                //console.log(res.data._id)
                alert(`Aluno ${res.data._id} : ${name} criado com sucesso.`)
                navigate("/listStudent")
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    */
        FirebaseStudentService.create(
          firebase.getFirestoreDb(),
          (_id)=>{
            setLoading(false)
           //console.log(res.data._id)
            //alert(`Aluno ${name} criado com sucesso com id ${_id}.`)
            setToast({header:'Sucesso!',body:`Aluno ${name} criado com sucesso.`,bg:'success'})
            setShowToast(true)
            navigate("/listStudent")
          },
          newStudent
      )

  }

  const renderSubmitButton = () => {
    if (loading) {
        return (
            <div style={{ paddingTop: 20 }}>
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span style={{ marginLeft: 10 }}>Carregando...</span>
                </button>
            </div>
        )
    }
    return (
        <>
            <div className="form-group" style={{ paddingTop: 20 }}>
                <input type="submit" value="Criar Estudante" className="btn btn-primary" />
            </div>
        </>
    )
}

  return (
    <>
      <main>
        <h2>
          Criar Estudante
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome: </label>
            <input type="text"
              className={`form-control ${validate.name}`}
              value={(name == null || name === undefined) ? "" : name}
              name="name"
              onChange={(event) => { setName(event.target.value) }} />
          </div>
          <div className="form-group">
            <label>Curso: </label>
            <input type="text"
              className={`form-control ${validate.course}`}
              value={(course == null || course === undefined) ? "" : course}
              name="course"
              onChange={(event) => { setCourse(event.target.value) }} />
          </div>
          <div className="form-group">
            <label>IRA: </label>
            <input type="text"
              className={`form-control ${validate.ira}`}
              value= {(ira == null || ira === undefined) ? "" : ira}
              name="ira"
              onChange={(event) => { setIRA(event.target.value) }} />
          </div>
          {renderSubmitButton()}
        </form>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );   
};

export default CreateStudentPage