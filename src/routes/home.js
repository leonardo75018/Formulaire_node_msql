const express = require("express");
const  connection = require("../config_bd/bd")
const router = express.Router()

router.get("/form", (req,res) =>{
    res.render("form")

})

router.post("/form", (req,res) =>{
  
    connection.query("INSERT INTO messages SET?", req.body,
    (err,rs)=>{
        res.redirect("form")

    })


})


module.exports =router;