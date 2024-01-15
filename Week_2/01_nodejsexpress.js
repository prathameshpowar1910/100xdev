//? what is ecma script?
// these are the rules that javascript follows

//? what is javascript?
// javascript is a programming language that is used to make web pages interactive
// it is a scripting language
// it is a high level language
// it is a dynamic language
// it is a weakly typed language
// it is a prototype based language
// it is a multi-paradigm language
// it is a single threaded language
// it is a interpreted language
// it is a case sensitive language
// it is a client side language
// it is a server side language
// it is a event driven language
// it is a asynchronous language
// it is a concurrent language
// it is a distributed language
// it is a functional language
// it is a imperative language
// it is a structured language
// it is a object oriented language
// it is a reflective language
// it is a garbage collected language

//? what is the difference between javascript and ecmascript?
// javascript is a programming language while ecmascript is a set of rules that javascript follows

//? what is nodejs?
// nodejs is a runtime environment for javascript
// it is a platform that allows javascript to run on the server side

//? this is how you create a nodejs server using the http module
// import http from "http";
// import { hostname } from "os";
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// })

import express from "express";
const app = express();

// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json
app.use(express.static("public")); // for serving static files

app.get("/", (req, res) => {
  console.log(req.body); // for body parameters
  console.log(req.query); // for query parameters
  res.send("This is Get");
});

app.get("/:name", (req, res) => {
  // console.log(`hi ${req.params.name}`);
  // console.log(`hi ${req.params["name"]}`);
  res.send(`hi ${req.params.name}`); // for dynamic parameters
})

app.post("/", (req, res) => {
  res.send("This is Post");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
