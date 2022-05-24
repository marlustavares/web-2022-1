var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require("./db/MongoDBConexao")

//var studentRoute = require('./routes/student/StudentRoute');
var studentRoute = require('./routes/student/StudentRoutes');
var teacherRoute = require('./routes/teacher/TeacherRoutes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

//app.use('/api/v1/users', users);
app.use('/crud/students',studentRoute)
app.use('/crud/teacher',teacherRoute)


module.exports = app;