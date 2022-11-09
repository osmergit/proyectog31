import {db} from '../mongodb.js'
import {evento} from '../models/evento.js'
import mongoose from 'mongoose';
var client = mongoose.client;
export const regevento1 = async (req,res) => {
    res.send("🙂Archivo agregado con exito😊")
    console.log(req.body)

evento.create(
    {
        fecha: req.body.fecha,
        equipo1: req.body.equipo1,
        equipo2: req.body.equipo2,
        marcador1: req.body.marcador1,
        marcador2: req.body.marcador2,
        tipoevento: req.body.tipoevento 
    }, (error, evento) =>{
        if(error){
         console.log("problemas al guardar");   
        }        
        console.log("archivo guardado con exito");
    });
}
//Registra un evento
export const regevento = (req, res) => {
    const cevento = evento(req.body);
    cevento
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };
//Muestra todos los eventos
export const showevento = (req,res) => {
   // const showevento = evento(req.body);
    evento
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error})); 
}

//Muestra un evento especifico
export const showonevento = (req, res) => {
    const { id } = req.params;
    evento
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };


  //Eliminar un evento deportivo

  export const deleteonevent =  (req, res) => {
    const { id } = req.params;
    evento
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

   //Actualizar un evento deportivo

   export const updateonevent =  (req, res) => {
    const { id } = req.params;
    const { fecha , equipo1, equipo2, marcador1, marcador2, tipoevento } = req.body;
    evento
      .updateOne({ _id: id }, { $set: { fecha , equipo1, equipo2, marcador1, marcador2, tipoevento } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };