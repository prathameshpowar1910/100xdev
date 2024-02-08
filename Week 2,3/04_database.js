import express, { json } from "express";
import { sign, verify } from "jsonwebtoken";
import { connect, model } from "mongoose";
const jwtPassword = "123456";

connect(
  "your_mongo_url",
);

const User = model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(json());

function userExists(username, password) {
  // should check in the database

  const existingUser = User.findOne({ username, password });

}

app.post("/signup", async function (req, res) {
  await User.create(req.body);
  // const user = new User(req.body);
  // await user.save();
  return res.json({
    msg: "User created",
  });
})

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);