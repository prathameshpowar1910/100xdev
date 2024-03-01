import { useState } from "react";

export function CreateTodo() {
  //react-query is optimal way

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    })
      .then(async (response)=>{
        console.log(response)
        if(response.ok){
          console.log("response is ok")
        }
        else{
          console.log("response is not ok")
        }
      })
  };

  return (
    <>
      <input
        style={{
          width: "80%",
          height: "30px",
          fontSize: "20px",
          padding: "10px",
          margin: "10px 0",
        }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="title"
      />{" "}
      <br />
      <input
        style={{
          width: "80%",
          height: "30px",
          fontSize: "20px",
          padding: "10px",
          margin: "10px 0",
        }}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="description"
      />
      <button
        style={{
          width: "80%",
          height: "30px",
          fontSize: "20px",
          padding: "15px",
          margin: "10px 0",
          backgroundColor: "green",
          color: "white",
        }}
        onClick={addTodo}
      >
        Add a todo
      </button>
    </>
  );
}
