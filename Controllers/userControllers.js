const mssql=require('mssql')
const config = require('../Database/db')

async function getStudents(req,res)
{
  try{
    const pool= await mssql.connect(config)
    const result= await pool.request().execute("getStudents")
    res.json(result.recordset)

  }

  catch(err){
    console.log(err)
  }
}


async function getStudent (req,res)
{
  const id = req.params.id
  try{
    let pool = await mssql.connect(config)
    let result1 = await pool.request()
    .input('id',mssql.Int, id)
    .execute('getStudent');
    res.json(result1.recordset)
  }

  catch(err){
    console.log(err)
  }
}

async function addStudent(req,res){
  const{FirstName,SecondName,Email,ProjectName,Password}=req.body
  try{
    let pool =await mssql.connect(config)
    let result1 =await pool.request()
    // .input('id',mssql.Int,id)
    .input('FirstName',FirstName)
    .input('SecondName',SecondName)
    .input('Email',Email)
    .input('ProjectName',ProjectName)
    .input('Password',Password)
    .execute("InsertStudent")
    res.json("Student added successfully")

  }
  catch(err){
    console.log(err)
  }
}

async function updateStudent(req,res){
  const{FirstName,SecondName,Email,ProjectName,Password}=req.body
  const id =req.params.id;
  try{
    let pool =await mssql.connect(config)
    await pool.request()
    .input('id',id)
    .input('FirstName',FirstName)
    .input('SecondName',SecondName)
    .input('Email',Email)
    .input('ProjectName',ProjectName)
    .input('Password',Password)
    .execute("updateStudents")
    
    res.json("Student updated successfully")

  }
  catch(err){
    console.log(err)
  }
}



async function deleteStudent(req,res){
  const id =req.params.id
  try{
    let pool =await mssql.connect(config)
    let result1 =await pool.request()
    .input('id',id)
    .execute("DeleteStudents")
    res.json("Student successfully deleted!")

  }
  catch(err){
    console.log(err)
  }
}

module.exports={
    getStudents,
    getStudent,
    addStudent,
    updateStudent,
    deleteStudent
}

