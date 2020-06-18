const express = require('express');
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("./config_bd/bd")
const path = require("path")
const home = require("./routes/home");


const app = express();


//config  
  //Moteur de template
app.engine("handlebars", handlebars({defaultLayout: "main"}) )
app.set("view engine", "handlebars");

//body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Public
app.use("/public",express.static("public") )


//Routes (les routes toujours en dessous des configs )
app.use("/home", home)




//serveur 
app.listen(2000,  () => {
  console.log('Example app listening on port 2000!')
})