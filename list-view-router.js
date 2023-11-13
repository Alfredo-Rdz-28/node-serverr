const express= require(`express`);

const listView = express.Router();


listView.param("id", (req, res, next, id) => {
    const taskId = parseInt(id);
    if (isNaN(taskId) || taskId <= 0) {
      return res.status(400).json({ error: "Parámetro ID no válido" });
    }
    next();
  });

  

listView.get(`/completa`,(req,res)=>{

const {listaTareas}= require('./practica');
    const tareaCompletado = listaTareas.filter((listaTareas) =>listaTareas.completado);
    res.status(200).json(tareaCompletado);

});

listView.get(`/incompleta`,(req,res)=>{
    const {listaTareas}= require('./practica');
    const tareaIncompleta = listaTareas.filter((listaTareas) => !listaTareas.completado);
    res.status(200).json(tareaIncompleta);

});

module.exports=listView;