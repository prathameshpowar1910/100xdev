import express from "express";

const app = express();

function userMiddleware(req,res,next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (!(username === "admin" && password === "admin")) {
    res.status(401).json({"msg":"Unauthorized"});
  } else {
    next();
  }
}

function kidneyMiddleware(req,res,next) {
  const kidneyId = req.query.kidneyId;

  if (kidneyId != 1 && kidneyId != 2 && kidneyId != 3) {
    res.status(401).json({"msg":"Unauthorized"});
  } else {
    next();
  }
}
app.get("/health-checkup", userMiddleware, kidneyMiddleware, (err,req,res,next)=>{

  res.status(200).send("OK");
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})