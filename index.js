//CommonJS - is the module system used by Node. It allows you to export and import modules or files.

//Module - a file containing your reusable code. It gives us a way to manage our code and distribute files according to their functions.

// const message = require("./helpers/math.js");

// console.log(message());

const express = require("express");
const welcomeRoute = require("./routers/welcome.js");
// const http = require("http");

// const server = http.createServer(function(request, response){
//     response.statusCode = 404;
//     response.setHeader("Content-Type", "text/plain");
//     response.end("LINK NOT FOUND!");
// });

const entryPoint = "/api"

const app = express(); //returning a big object with many function/methods

// app.use(entryPoint, function(request, response) {
//     response.send("Hello World");
// })

app.use(entryPoint, welcomeRoute);

app.listen(3000, function() {
    console.log("Server is running on Port 3000");
});

// server.listen(5000, "127.0.0.1", function() {
//     console.log("Server is running at http://127.0.0.1:5000/")
// })