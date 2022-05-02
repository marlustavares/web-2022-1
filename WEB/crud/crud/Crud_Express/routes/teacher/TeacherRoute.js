var express = require('express')
var router = express.Router()
var teacherService = require('../../services/teacher/TeacherService')

router.post('/create', function (req, res, next) {
    const teacher = teacherService.create(req.body)
    return res.json(teacher)
});

router.get('/retrieve/:id', function (req, res, next) {
    const teacher = teacherService.retrieve(req.params.id)
    return res.json(teacher)
});

router.put('/update/:id', function (req, res, next) {
    const teacher = teacherService.update(req.params.id, req.body)
    return res.json(teacher)
});

router.delete('/delete/:id', function (req, res, next) {
    const ok = teacherService.delete(req.params.id)
    if (ok) return res.json({ "sucess": true })
    else return res.json({ "sucess": false })
});

router.get('/list', function (req, res, next) {
    return res.json(teacherService.list())
})

module.exports = router