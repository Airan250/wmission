const express = require('express')
const mysql = require("mysql")
const router = express.Router()

router.post("/email", (req, res)=>{
    var con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"world-mission"
    })
    con.connect(function(err){
        if(err) throw err;
        console.log("database connected successfull!!!")
        var email = req.body.email
        var sql = "INSERT INTO email(email) VALUES(?)"
    con.query(sql, [email], function(err, result, fields){
        if(err){
            console.log(err)
        }else{
            console.log(`recold inserted: ${result.affectedRows}`)
            res.redirect(`/message/${req.body.email}`)
        }
    })
    })
})





module.exports = router