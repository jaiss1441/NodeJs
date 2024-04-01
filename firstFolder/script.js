// var a = 10;
// module.exports =a;

// var figlet = require("figlet");

// figlet("Node", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

//eXPRESS

const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send('Hello Jias')
})
app.listen(3000)