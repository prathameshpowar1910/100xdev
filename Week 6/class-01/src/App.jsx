import './App.css'
import { useEffect, useState } from 'react'
// import Header from './components/Header'
// import HeaderWithButton from './components/HeaderWithButton'

// function App() {
//   return (
//     <>
//       <HeaderWithButton />
//       <Header title={"raman"} />
//     </>
//   )
// }
// let counter = 4; 

// function App() {
//   const [todos,setTodos] = useState([
//     {id:1, title: 'First todo', description: 'This is the first todo'},
//     {id:2, title: 'Second todo', description: 'This is the second todo'},
//     {id:3, title: 'Third todo', description: 'This is the third todo'},
//   ])

//   const [newTitle, setNewTitle] = useState('')
//   const [newDescription, setNewDescription] = useState('')

//   const addTodo = () => {
//     setTodos([...todos, {id:counter++, title: newTitle, description: newDescription}])
//   }

//   return (
//     <>
//     <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} />
//     <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} />
//     <button onClick={addTodo}>Add todo</button>
//     <button onClick={() => {
//       setTodos([])
//     }}>Clear todos</button>
//     <h1>Find your todos below</h1>
//     {todos.map((todo) => {
//       return <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} />
//     })}
//      {todos.length === 0 && 'No todos found'}
//     </>
//   )
// }

// import PropTypes from 'prop-types';

// function Todo({id, title, description}) {
//   return (
//     <>
//       <h3>{id}</h3>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </>
//   )
// }

// Todo.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired
// };

// function App() {
//   return (
//     <>
//     <CardWrapper>
//       hello world
//     </CardWrapper>
//     {/* <CardWrapper innerComponent={<TextComponent />} /> */}
//     </>
//   )
// }

// function CardWrapper({children}) {
//   return (
//     <div style={{border:"2px solid black"}}>
//       {children}
//     </div>
//   )
// }

// function TextComponent() {
//   return (
//     <h1>Hello world </h1>
//   )
// }

// function CardWrapper({innerComponent}) {
//   return (
//     <div style={{border:"2px solid black"}}>
//       {innerComponent}
//     </div>
//   )
// }

//?todos

function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch('https://sum-server.100xDevs.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data.todos));
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <button onClick={() => setCounter(counter + 1)}>Change todos</button>
        {todos.map(todo => (
          <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} completed={todo.completed} />
        ))}
      </header>
    </div>
  );
}

function Todo({ id, title, description, completed }) {
  return (
    <div>
      <h3>{id}</h3>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{completed ? "Completed" : "Incomplete"}</p>
    </div>
  );
}

export default App;
