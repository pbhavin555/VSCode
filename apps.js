//jshint esversion: 6
const express = require("express");

const bodyParser = require("body-parser");
const request = require("request");




const app = express();
app.use(bodyParser.urlencoded({extended:true}));



app.use(express.static("public")); //Inside the static folder there is a CSS and images

app.get("/" ,function(req , res){
    res.sendFile("/Users/bhavin/Desktop/Newsletter-Signup/signup.html");

})
app.post("/" , function(req, res){

    var firstName = req.body.fname;
    var lastName= req.body.lname;
    var email = req.body.email;
    console.log(firstName);

})


app.listen(3000 , function(){
    console.log("Server is Running on port 3000.... ")
})