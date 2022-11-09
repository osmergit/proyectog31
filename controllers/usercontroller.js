//import mongoose from 'mongoose';
import {usuario} from '../models/usuario.js';

export const regusuario1 = async (req,res) => {
    res.send("🙂Archivo agregado con exito😊")
    console.log(req.body)
    await usuario.create({nomuser: req.body.nomuser, password: req.body.password, correo:req.body.correo  });
}
//Registrar un Usuario
export const regusuario = (req, res) => {
    const user = usuario(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };
//Mostrar todos los usuarios
export const showuser = (req,res) => {
 
    usuario
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error})); 
}
//Mostrar un usuario especifico

export const showoneuser = (req, res) => {
    const { id } = req.params;
    usuario
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

//Eliminar un usuario

export const deleteoneuser =  (req, res) => {
    const { id } = req.params;
    usuario
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

  //Actualizar un usuario

  export const updateoneuser =  (req, res) => {
    const { id } = req.params;
    const { nomuser , password, correo } = req.body;
    usuario
      .updateOne({ _id: id }, { $set: { nomuser, password, correo } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };
