import express, { json } from "express";
import { createTodo, updateTodo } from "./types.js";
import { Todo } from "./db.js";
const app = express();

app.use(json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong input",
    });
    return;
  }
  //put it in mongodb
  const todo = await Todo.create({
    title: parsedPayload.data.title,
    description: parsedPayload.data.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
    todo,
    ddddd,
  });
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});

  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong input",
    });
    return;
  }

  await Todo.updateOne(
    {
      _id: parsedPayload.data.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo updated",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
