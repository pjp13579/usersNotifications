import environment from "../environment";
import mongoose from "mongoose";

async function initializeMongoClient() {
     const client = await mongoose.connect(environment.DATABASE_URI);
     client.connection.on('error', error => {
          console.error(error);
     });
     client.connection.on('connected', message => {
          console.log(message);
     });
     if(!environment.PRODUCTION){
          client.set('debug', true);
     }     
     
     return client;
}


export default initializeMongoClient;