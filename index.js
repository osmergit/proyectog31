import express from "express";
import cors from 'cors'
//import router from './routes.js'
const router = express.Router()


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

router.get('/', function (req,res){
    res.send('🚀Hola desde la raiz🚀')
})

router.get('/login', function (req,res){
    res.send('Hola desde login')
})

router.post('/agregar', function (req,res){
    res.send('Mensaje Añadido')
})

router.delete('/delete', function (req,res){
    res.send('🤩Mensaje borrado')
})


/*
app.get('/',(req,res)=>{
    res.send('😎HOLA MUNDO G31 😍')
}) */



app.listen(8000, ()=> {
    console.log('Servidor Corriendo en  http://localhost:8000/')
})