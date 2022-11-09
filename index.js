import express from "express";
import cors from 'cors';
import { router } from './routes/routes.js'

//import blogRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
//app.use('/usuarios',blogRoutes)
app.use('/',router);



app.listen(8000, ()=> {
    console.log('Servidor Corriendo en  http://localhost:8000/')
})