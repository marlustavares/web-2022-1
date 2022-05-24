var mongoose = require('mongoose');
//criando o schema, o qual servirá para criar o modelo (collections)
var TeacherSchema = mongoose.Schema(
 {
 name: {type:String, required:true, max:200},
 department: {type:String, required:true, max:200},
 degree: {type:String, required:true, max:200},
 }
);
//criando o modelo a partir do schema acima, o qual servirá para incluir as instâncias
//(documentos)
var TeacherModel = mongoose.model('teachers', TeacherSchema);
//retornando o modelo a ser usado pelo serviço (CRUD).
module.exports = TeacherModel;