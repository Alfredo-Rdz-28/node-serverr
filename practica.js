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

      
  
  