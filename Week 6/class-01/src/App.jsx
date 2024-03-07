import './App.css'
import { useState } from 'react'
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
let counter = 4; 

function App() {
  const [todos,setTodos] = useState([
    {id:1, title: 'First todo', description: 'This is the first todo'},
    {id:2, title: 'Second todo', description: 'This is the second todo'},
    {id:3, title: 'Third todo', description: 'This is the third todo'},
  ])

  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const addTodo = () => {
    setTodos([...todos, {id:counter++, title: newTitle, description: newDescription}])
  }

  return (
    <>
    <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} />
    <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} />
    <button onClick={addTodo}>Add todo</button>
    <button onClick={() => {
      setTodos([])
    }}>Clear todos</button>
    <h1>Find your todos below</h1>
    {todos.map((todo) => {
      return <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} />
    })}
     {todos.length === 0 && 'No todos found'}
    </>
  )
}

import PropTypes from 'prop-types';

function Todo({id, title, description}) {
  return (
    <>
      <h3>{id}</h3>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  )
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default App;
