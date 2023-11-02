const express= require(`express`);
const listEdit= express.Router();
const bodyParser = require('body-parser');

listEdit.use(bodyParser.json()); 



const listaTareas = [  
    {id :1, descripcion: "barrer", completado: false},
    {id:2, descripcion: "trapear", completado: true},
    {id:3, descripcion: "lavar ropa", completado: false},
    {id:4, descripcion: "lavar el carro", completado: true},
    {id:5, descripcion:"hacer de comer", completado: false},
  ];
  

    listEdit.post(`/agregar`,(req,res)=>{
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
