import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//require("dotenv").config();

//const bd_url = 'mongodb+srv://osmereduardo:Colombia2022@cluster0.dnx9hq7.mongodb.net/dbeventos?retryWrites=true&w=majority';
//console.log(" La conexion fue realizada 🚴‍♀️ con exito a la bd:🚀 ", db.connection.name)
//export const db = await mongoose.connect(bd_url);
export const db =  mongoose.connect(process.env.MON_DBURI).then(()=> {
    console.log(" La conexion fue realizada 🚴‍♀️ con exito a la bd:🚀 ")
}).catch((error) => console.error("Problemas al conectar a la Base de datos de Mongodb🥵",error));



export default db;
