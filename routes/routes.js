import express from "express";
import mongoose from "mongoose";

import { user } from "../models/user.js";
export const router = express.Router();

let user1 = new user();

router.get('/', function (req,res){
    res.send('🚀Hola desde la raiz🚀')
})

router.get('/login', function (req,res){
    res.send('Hola desde login')
})

router.post('/agregar', function (req,res){
    res.send('Mensaje Añadido')
    console.log(req.body)
    //let user = new user()
    user1.nameuser = req.body.nameuser
    user1.password = req.body.password
    user1.correo = req.body.correo
    user1.save((err,usersave)=> {
        if (err) res.status(500).send({message: 'error al salvar en la bd: ${err}'})
        res.status(200).send({user: usersave})
    })


})

router.delete('/delete', function (req,res){
    res.send('🤩Mensaje borrado')
})

export default router;