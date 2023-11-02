const express= require(`express`);

const listView = express.Router();

const listaTareas = [  
    {id :1, descripcion: "barrer", completado: false},
    {id:2, descripcion: "trapear", completado: true},
    {id:3, descripcion: "lavar ropa", completado: false},
    {id:4, descripcion: "lavar el carro", completado: true},
    {id:5, descripcion:"hacer de comer", completado: false},
  ];
  

listView.get(`/completa`,(req,res)=>{
    const tareaCompletado = listaTareas.filter((listaTareas) =>listaTareas.completado);
    res.status(200).json(tareaCompletado);

});

listView.get(`/incompleta`,(req,res)=>{
    const tareaIncompleta = listaTareas.filter((listaTareas) => !listaTareas.completado);
    res.status(200).json(tareaIncompleta);

});

module.exports=listView;