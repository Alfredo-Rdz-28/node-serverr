const express= require(`express`);
const listEdit= express.Router();
const bodyParser = require('body-parser');

listEdit.use(bodyParser.json()); 

//middleware para manejar los errores de solicitud POST y PUT
listEdit.use((req, res, next) => {
  if (req.method === "POST" || req.method === "PUT") {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "Cuerpo de solicitud vacío" });
    } else {
      // Verifica que el cuerpo de la solicitud contenga la información requerida
      const requiredAttributes = ["description", "completado"]; 
      for (const attr of requiredAttributes) {
        if (!(attr in req.body)) {
          return res.status(400).json({ error: "Falta el atributo: ${attr}" });
        }
        
      }
    }
  }
  next();
});





    listEdit.post(`/agregar`,(req,res)=>{
      const {listaTareas}= require('./practica');
        const agregaTarea = req.body;
            const nuevaTarea= {
            id:listaTareas.length + 1,
            descripcion :agregaTarea.descripcion,
            completado:agregaTarea.completado,
        } 
        listaTareas.push(nuevaTarea)
        res.status(201).json('Tarea agregada'); 
        })
    
    listEdit.delete(`/borrar/:id`,(req,res)=>{
    const {listaTareas}= require('./practica');
    const id = parseInt(req.params.id);
    const index = listaTareas.findIndex((tarea) => tarea.id === id);
     if (index !== -1) {
        listaTareas.splice(index, 1);
        res.status(204).json('Tarea Borrada');
    }else {
        
        res.status(404).json('Error');
        }
    })

    
    listEdit.put(`/actualizar/:id`,(req,res)=>{
      const {listaTareas}= require('./practica');
    
      const id = parseInt(req.params.id);
    
    const tarea= listaTareas.find((tarea)=> tarea.id === id);
     if (tarea) {
         if (tarea.completado === false) {
           tarea.completado = true;
           res.status(200).json('Tarea completada');
         }  else {
           res.status(400).json('La tarea ya está completada');
         }
        }  else {
         res.status(404).json('La tarea no existe');
        }
    
       })

      
     



module.exports=listEdit;
