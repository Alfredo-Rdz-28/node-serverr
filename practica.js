 const readline= require ('readline-sync');
 const express= require(`express`);
const listView = require('./list-view-router');
const listEdit = require('./list-edit-router');
 const app = express();
 const PORT= 3000;

 app.get("/", (req, res)=>{
    res.json(`hola este es un programa de lista de tareas`);
 })


  

    app.use("/list-view", listView);
    
    app.use("/list-edit", listEdit);
         
    app.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo en : https://localohst:3000/`)
    })

    const listaTareas = [  
      {id :1, descripcion: "barrer", completado: false},
      {id:2, descripcion: "trapear", completado: true},
      {id:3, descripcion: "lavar ropa", completado: false},
      {id:4, descripcion: "lavar el carro", completado: true},
      {id:5, descripcion:"hacer de comer", completado: false},
    ];
  
    module.exports= {listaTareas};
  
  