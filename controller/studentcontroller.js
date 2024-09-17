const Student=require('../models/student');
 async function  addStudent(req,res){
    try{
        console.log(req.body,'req.body')
        let student=new Student(req.body);
        await student.save();//async metho
        console.log("data save succefully");
        res.end("added");
    }
    catch(err){
        console.log(err)

    }
}
async function getStudents(req,res){
    try{
        let students=await Student.find({});
        console.log(students,'students');
        res.send(students)
    }
    catch(err){

    }
}
async function getStudentByRollNo(req,res){
    try{
      let rollNo=parseInt(req.params.rollNo);
      console.log(rollno,'rollno')
      let student=await Student.findOne({rollNo:rollNo});
      res.send(student)
    }
    catch(err){

    }
}
module.exports={
    addStudent,
    getStudents,
    getStudentByRollNo
}
