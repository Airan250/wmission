const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

router.get("/:email", (req, res)=>{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'airaning250@gmail.com',
    pass: 'nyabingi(000)'
  }
});

var mailOptions = {
  from: 'WORLD MISSION TVET SCHOOL',
  to: 'airaning250@gmail.com', //`${req.params.email}`
  subject: 'MESSAGE FROM WORLD MISSION TVET SCHOOL',
  text: 'hello nanone ni world mission tvet school tuributsa abanyeshuri bose nababyeyi ko kuwagatanu 22/ 08/ 2022 hari inama saa munani zamanywa'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('world mission now you end to send email with this info: ' + info.response);
    
  }
}); 
res.redirect("/")
})







module.exports = router