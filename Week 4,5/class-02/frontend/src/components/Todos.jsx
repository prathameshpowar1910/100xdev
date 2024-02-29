export function Todos({todos}) {
  return (
    <>
    {todos.map((todo,index)=>{
      return (
        <div key={index}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <button>{todo.completed ? "Complerted" : "Mark as Ccomplete"}</button>
        </div>
      ) 
    })}
    </>
  )
}