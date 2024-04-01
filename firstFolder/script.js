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

// const express = require('express')
// const app = express()

// // app.get('/',function(req,res){
// //     res.send("Hello  Jais")
// // })

// app.get('/profile',function(req,res){
//     res.send("Hello Profile")
// })

// app.listen(4000)
const express = require('express')
const app = express()

app.use(function(req,res,next){
    console.log("Count incresing ");
    next();
});

app.get('/',function(req,res){
    res.send("Hello  vikas")
})

app.listen(3000)