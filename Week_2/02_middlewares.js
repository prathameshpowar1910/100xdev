import express from "express";

const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

const objSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(10).max(100),
  country: zod.literal("IN").or(zod.literal("US")),
  age: zod.number().min(18).max(100),
})

app.use(express.json());

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (!(username === "admin" && password === "admin")) {
    res.status(401).json({ msg: "Unauthorized" });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;

  if (kidneyId != 1 && kidneyId != 2 && kidneyId != 3) {
    res.status(401).json({ msg: "Unauthorized" });
  } else {
    next();
  }
}
app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  (err, req, res, next) => {
    res.status(200).send("OK");
  }
);

app.get("/kidney-length", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  // const kidneyLength = kidneys.length;
  // res.send("you have " + kidneyLength + " kidneys");

  if (!response.success) {
    res.status(400).json({ msg: "Bad Request" });
  }
  res.send({
    response,
  });
});

//global catches
app.use((err, req, res, next) => {
  res.status(500).json({
    msg: "Internal Server Error",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
