 const readline= require ('readline-sync');
 
 const listaTareas = [  
    {id :1, descripcion: "barrer", completado: false},
    {id:2, descripcion: "trapear", completado: true},
    {id:3, descripcion: "lavar ropa", completado: false},
    {id:4, descripcion: "lavar el carro", completado: true},
    {id:5, descripcion:"hacer de comer", completado: false},
  ];
  
  function agregarTarea(id,descripcion, completado){
    const nuevaTarea= {
    id:listaTareas.length + 1,
    descripcion:descripcion,
    completado:false , }

  listaTareas.push(nuevaTarea)
}



function borrarTarea(id) {
    const index = listaTareas.findIndex((tarea) => tarea.id === id);
    if (index !== -1) {
        listaTareas.splice(index, 1);
        console.log("tarea con ID " + id + " eliminado.");
    } else {
        console.log("La tarea con ID " + id + " no existe.");
    }
}
 function marcarTareaCompletado(id){
    const tarea= listaTareas.find((tarea)=> tarea.id === id);
    if(tarea){
        tarea.completado= true;
        console.log(`tarea completada`)
    }else{
        console.log(`Si no se encuentra id la tarea no existe`)
    }
 }
 function imprimirTarea(){
    console.log("lista de tareas");
    listaTareas.forEach ((tarea)=> {
        console.log(`ID: ${tarea.id}, Descripción: ${tarea.descripcion}, Completada: ${tarea.completado ? "Sí" : "No"}`);
    })
    }
  

 while(true){
  console.log("\nOpciones:");
  console.log("1. Agregar tarea");
  console.log("2. Borrar tarea");
  console.log("3. Marcar tarea como completada");
  console.log("4. Listar tareas");
  console.log("5. Salir")
  
  const options= readline.question(`Elegi una opcion: `);

  switch(options){
    case `1`:
        const descripcion= readline.question(`Ingrese la descircion de la tarea: `);
        agregarTarea(descripcion);
        break;
    
    case `2`:
        const idABorrar= parseInt(readline.question(`borrar id de la tarea a completar`));
        borrarTarea(idABorrar);
        break;         
    case `3`:
        const idACompletar= parseInt(readline.question(`Ingrese el id de la tarea a completar`));
        marcarTareaCompletado(idACompletar);
        break;  
    case `4`:
        imprimirTarea();
        break;
    case `5`:
        console.log(`Saliendo del programa`);
        process.exit(0);
    default: 
        console.log(`Opcion no valida`);               

  }

 }
    
    
    
   
  

 
  
  