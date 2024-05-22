// import mongoose from 'mongoose'
// import {DB_NAME} from './constants.js'
import 'dotenv/config'


import connectingDB from './db/index.js'






connectingDB()







/*
;(async()=>{
  try{
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on('error',(error)=>{
      console.log(error);
      
    })
    app.listen(process.env.PORT,(error)=>{
      console.log(`server is listingin on PORT:${process.env.PORT}`);
      console.log(error);
    })
  }catch(error){
    console.log(error);
    throw(error)
  }
})()

*/