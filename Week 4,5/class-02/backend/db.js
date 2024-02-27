import mongoose, { Schema, connect } from "mongoose";

connect(`${process.env.MONGODB_URI}`,{
  useNewUrlParser: true,
})

const todoSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  completed:{
    type: Boolean,
    default: false
  }
})

const Todo = mongoose.model('Todo', todoSchema);

export {
  Todo
}