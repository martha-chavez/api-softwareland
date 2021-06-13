// require('dotenv').config({path: 'coneccion.env'});

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');
  
// mongoose connection
mongoose.Promise = global.Promise;

 if(mongoose.connect(mongoDB)){
        console.log('bd conectada');
      }else{
        console.log(error);
      console.log('bd error');
      process.exit(1); //detenemos la app 
      }
      

      

///''mongodb:///Tododb''


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); 
routes(app); 

app.listen(port);
app.use(function(req, res) {
  res.status(404).send({url:'La ruta '+ req.originalUrl + ' No existe'})
});


console.log('Appi de Tareas corriendo en el puerto: ' + port);