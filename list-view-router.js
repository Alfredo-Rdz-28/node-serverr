const express= require(`express`);

const listView = express.Router();
const listaTareas = require("./data");
listView.use(authorize)


listView.param("id", (req, res, next, id) => {
    const taskId = parseInt(id);
    if (isNaN(taskId) || taskId <= 0) {
      return res.status(400).json({ error: "Parámetro ID no válido" });
    }
    next();
  });

  

listView.get(`/completa`,(req,res)=>{


    const tareaCompletado = listaTareas.filter((listaTareas) =>listaTareas.completado);
    res.status(200).json(tareaCompletado);

});

listView.get(`/incompleta`,(req,res)=>{
    
    const tareaIncompleta = listaTareas.filter((listaTareas) => !listaTareas.completado);
    res.status(200).json(tareaIncompleta);

});

listView.get("/lasTareas",(req,res)=>{
  res.status(200).json(listaTareas);
})

listView.get("/tareas/:id", (req, res) => {
  const tareaId = parseInt(req.params.id);
  const tarea = listaTareas.find((tarea) => tarea.id ===tareaId );
  if (tarea) {
    res.status(200).json(tarea);
  } else {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
});


module.exports=listView;