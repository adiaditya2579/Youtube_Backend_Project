import mongoose  from "mongoose";
import {DB_NAME} from '../constants.js'
import 'dotenv/config'


const connectingDB = async ()=>{
  try{
    const connetionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log(`\n MongoDB Connected !! DB HOST ${connetionInstance.connection.host}`);
  }catch(error){
    console.log(error,"MONGODB connetion error");
    process.exit(1)
  }
}


export default connectingDB