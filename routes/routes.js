import express from 'express';
import {evento} from '../models/evento.js';
//import {regusuario, showuser, showoneuser, deleteoneuser, updateoneuser} from '../controllers/usercontroller.js';
import {regevento, showevento, showonevento, deleteonevent, updateonevent} from '../controllers/eventocontroller.js'
import { regusuario, showuser, shuserone, deluser, upuser  } from '../controllers/userscontroller.js'

import {db} from '../mongodb.js';

const evento1 = new evento();


export const router = express.Router();

router.get('/',(req,res) => {
    res.send('🚀Bienvenidos a Node Js desde la Raiz🚀')
})

router.get('/login', (req,res) => {
    res.send("😎Bienvenidos a Node Js desde Login😎")
})

//rutas collection eventos
router.post('/regevento', regevento);
router.get('/show', showevento);
router.get('/show/:id', showonevento);
router.delete('/delevent/:id', deleteonevent);
router.put('/upevent/:id', updateonevent);

//rutas collection usuarios
router.post('/reguser', regusuario);
router.get('/shuser', showuser);
router.get('/shuser/:id', shuserone);
router.delete('/deluser/:id',deluser);
router.put('/upuser/:id', upuser);


/*router.get('/showuser', showuser);
router.get('/showuser/:id', showoneuser);
router.delete('/deluser/:id', deleteoneuser);
router.put('/upuser/:id', updateoneuser);*/

router.post('/agregar',(req,res) => {
    res.send("🙂Archivo agregado con exito😊")
    console.log(req.body)
    //let user = new user()
    user1.nomuser = req.body.nomuser;
    user1.password = req.body.password;
    user1.correo = req.body.correo;
 //   usuario.create({nomuser: req.body.nomuser, password: req.body.password, correo:req.body.correo  });
})

router.post('/eventos',(req,res) => {
    res.send("🙂Archivo agregado con exito😊")
    console.log(req.body)
  
   evento.create(
    {
        fecha: req.body.fecha,
        equipo1: req.body.equipo1,
        equipo2: req.body.equipo2,
        marcador1: req.body.marcador1,
        marcador2: req.body.marcador2,
        tipoevento: req.body.tipoevento })
})

router.delete('/delete', (req,res) => {
    res.send("😬Archivo eliminado con exito")
})

export default router;