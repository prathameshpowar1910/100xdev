import { useState } from 'react';
import './App.css'
import Header from './components/Header'

function App() {

  const name = 'Raman';
  const [random,setRandom] = useState('Hkirat')

  const changeTitle = () => {
    const random = Math.random(); 
    setRandom(`${random}`)
  }

  return (
    <>
     <button onClick={changeTitle} >Click me to change title</button>
     <Header title={random} />
     <Header title={name} />
    </>
  )
}

export default App;
