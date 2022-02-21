const mssql=require('mssql')
require('dotenv').config()

let config={
    server:process.env.SERV,
    user:process.env.USE,
    database:process.env.DB,
    password:process.env.PASSWRD,
    options:{
        encrypt:false
    },
    pool:{
        max:5,
        min:0,
        idleTimeoutMillis:30000
    }
}

mssql.connect(config).then(pool =>{
    if(pool.connecting){
        console.log('connecting to database')
    }
    if(pool.connected){
        console.log('connected to database')
    }
}).catch(e=>console.log(e))

