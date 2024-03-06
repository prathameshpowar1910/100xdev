import { useState } from "react";

export default function Header() {
  const [random,setRandom] = useState('Hkirat')
  const changeTitle = () => {
    const random = Math.random(); 
    setRandom(`${random}`)
  }
  return (
    <>
    <button onClick={changeTitle} >Click me to change title</button>
    <Header title={random} />
    </>
  )
}

