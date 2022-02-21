var express=require('express');
// const mysql=require('mssql')
var app= express()
app.use(express.json())
// app.get("/getUsers",(req,res)=>{
//     res.send("Hello World!")
// })
// app.listen(4000);

app.use('/students',require('./Routing/routes'))

app.listen(4000,()=>{
    console.log("App is currently running!")
})

