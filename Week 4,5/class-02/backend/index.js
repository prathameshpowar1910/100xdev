import express, { json } from "express";
import { createTodo, updateTodo } from "./types.js";
const app = express();

app.use(json());

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong input",
    });
    return;
  }
  //put it in mongodb
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong input",
    });
    return;
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
