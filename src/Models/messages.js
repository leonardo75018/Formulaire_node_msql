const express = require("express")
const mysqlConnection = require("../config_bd/bd")
const router = require("../routes/home")


mysqlConnection.query("INSERT INTO messages SET?", req.body,
(err,rs)=>{
    res.redirect("form")
})



