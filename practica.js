const express= require(`express`);
const listView = require('./list-view-router');
const listEdit = require('./list-edit-router');
const app = express();
const PORT= 3000;
const dotenv = require ("dotenv");
const jwt = require ("jsonwebtoken");
const listaTareas = require("./data");

dotenv.config();
const secret = process.env.secret_key;

  const authorize = (allowedRoles) => {
   return (req, res, next) => {
     if (allowedRoles.includes(req.role)) {
       next();
     } else {
       res.status(403).json({ error: "Access not allowed" });
     }
   };
 };

  

  const JWTValidation = (req, res, next) => {
  // Extraemos el token del encabezado de la solicitud
  const token = req.headers.authorization;

  // Intentamos decodificar el token
  try {
  const decoded = jwt.verify(token, secret);

    // Verificamos el rol del usuario
  const role = decoded.role;
    req.role = role;

    // Continuamos con la ejecución del middleware
    next();
   } catch (error) {
    // Si el token no es válido, enviamos un error
    res.json({ error: error.message });
  }
};

  app.use(express.json());

  app.use("/list-view", listView);
    
  app.use("/list-edit", listEdit);


 
  app.post("/login", (req, res) => {
   
  const userName = req.body.userName;
 
   
  const user = users.find((user) => user.userName === userName);
 
   if (!user) {
     return res.status(401).json({ error: "Invalid user name or password" });
   }
   
  const payload = {
     email: user.email,
     username: user.username,
     role: user.role,
   };
   
  const token = jwt.sign(payload, secret, { algorithm: "HS256" }
   );
 
  res.json({ token });
 });

  app.get("/", (req, res)=>{
  res.json(`hola este es un programa de lista de tareas`);
 })


    
         
  app.listen(PORT, ()=>{
  console.log(`El servidor esta corriendo en : https://localohst:3000/`)
    })

    
 module.exports= {listaTareas};
  
  