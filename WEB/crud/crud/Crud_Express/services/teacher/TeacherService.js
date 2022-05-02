const TeacherModel = require('../../models/teacher/TeacherModel')

let teacher = [
    {_id:0, name:"Jefferson Carvalho", department: "Sistemas de Informação",degree: "Coordenador"},
    {_id:1, name:"Cristiano", department: "ES",degree: "2° Coodenador"},
    {_id:2, name:"Thiago", department: "EC",degree: "3° Coordenador"},
    {_id:3, name:"Wladimir", department: "RC",degree: "2° Gerente"}
]
let _id = 4

class TeacherService {

    static create(data) {
        let teachers = new TeacherModel(
            _id++,
            data.name,
            data.department,
            data.degree)
        teacher.push(teachers)
        return teacher
    }

    static retrieve(_id) {
        for (let i = 0; i < teacher.length; i++) {
            if (teacher[i]._id == _id) {
                return teacher[i]
            }
        }
        return {}
    }

    static update(_id, data) {
        for (let s1 of teacher) {
            if (s1._id == _id) {
                s1.name = data.name
                s1.department = data.department
                s1.degree = data.degree
                return s1
            }
        }
        return null
    }

    static delete(_id) {
        for (let i = 0; i < teacher.length; i++) {
            if (teacher[i]._id == _id) {
                teacher.splice(i, 1)
                return true
            }
        }
        return false
    }
    
    static list() {
        return teacher
    }

}

module.exports = TeacherService