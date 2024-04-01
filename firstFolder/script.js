// var a = 10;
// module.exports =a;

var figlet = require("figlet");

figlet("Node", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});