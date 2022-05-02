const StudentModel = require('../../models/student/StudentModel')

let students = [
    {_id:0, name:"Marlus Tavares", course: "Sistemas de Informação",ira:9.2},
    {_id:1, name:"Paulo", course: "SI",ira:8.6},
    {_id:2, name:"Zeca", course: "ES",ira:7.8},
    {_id:3, name:"Dede", course: "EC",ira:8.9}
]
let _id = 4

class StudentService {

    static create(data) {
        let student = new StudentModel(
            _id++,
            data.name,
            data.course,
            data.ira)
        students.push(student)
        return student
    }

    static retrieve(_id) {
        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                return students[i]
            }
        }
        return {}
    }

    static update(_id, data) {
        for (let s1 of students) {
            if (s1._id == _id) {
                s1.name = data.name
                s1.course = data.course
                s1.ira = data.ira
                return s1
            }
        }
        return null
    }

    static delete(_id) {
        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                students.splice(i, 1)
                return true
            }
        }
        return false
    }
    
    static list() {
        return students
    }

}

module.exports = StudentService