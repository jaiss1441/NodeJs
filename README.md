# NodeJs
Learning NodeJS


 Node JS is large code of c++ which getted from crome v8 engine and wrapped into JS 
 which is allow us to write JS and accept JS and 
 on the basis of C++ it help us to create server environment, till node is running  

 What is NodeJS in simple terms?

  Node. js (Node) is an Open Source, cross-platform runtime environment for executing JavaScript code.
  Node is used extensively for server-side programming, 
  making it possible for developers to use JavaScript for 
  client-side and server-side code without needing to learn an additional language.

  Git GitHub used also
         
         git add .
         git commit -m "comment"
         git push origin main
         git status 
         git config --global user.name ""
         git config --global user.email ""
         git donfig --list
         git clone "project link"


Point 1 : Run Code Command

         node ./script  (file name which you want to run)

Point 2 : NPM (Commands)

        NPM : node package Maneger

        In NPM we can get diffrent kind of packages/features which is build by someone

        Installing Pakages 

        npm insarll/i (that package name)
                eg. npm i figlet 

        Useage of package specify on that site
                eg. var figlet = require("figlet");
                    figlet("Hello World!!", function (err, data) {
                    if (err) {
                        console.log("Something went wrong...");
                        console.dir(err);
                        return;
                    }
                    console.log(data);
                    });

Point 3 : Express

        Express is framwork for nodeJs use for routing on diff pages

        Routing => redirecting to diff pages means routing 

        Routing in Node refers to the process of determining how an application responds to client
        requests to different endpoints (URLs). In a web application, these endpoints typically correspond to different pages or functionalities within the application.

        Types Of Routing : GET POST DELETE PATCH 
            Static Routing.
            Default Routing.
            Dynamic Routing.

        eg. 
        const express = require('express')
        const app = express()

        app.get('/',function(req,res){  // requesting via get method with function with two parameter (request and response )default rout is '/' 
        res.send('Hello Jias')  //sending response 
        })
        app.listen(3000)   //Running on port no 3000 by  using app.listen() function

Point 4 : Nodemon
        npm i nodemon -g //for installing nodemon package 
        after istallation if it show error them when you try to run(nodemon .\script.js ) file at that time put npx (npx nodemon .\script.js )

        Nodemon Package help us to automatically restart server whenever changes made in file

        commands :
        npx nodemone .\script.js (fileName)


Point 5 : Middelware 
        Rout chalne se pehele jo (code) calta hai use middleware khete hai 
        we can write as many middleware to pushforword next() is used in middleware 

        Use Case :
                 How Many time user visit the site incresing count in this case middleware can be useful
        eg :
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

Point 6 : Express Js+
                Node is main body by with the help of Express we can easely write server code which is hard to wtrite with the help of Nodes HTTP function the main purpose of express it is adaptive and easy 

          What is Express:
                It is package mainly use for  routing 
          Why use Express:
                HTTP is difficult to use, Express makes this easier 
          Routing:
                Makeing Routs means routing 
                Eg. /main
                    /main/login
                    /main/login/profile
            
