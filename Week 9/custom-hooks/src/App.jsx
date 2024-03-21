// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [render,setRender] = useState(true)

//   useEffect(()=>{
//     setInterval(()=>{
//       setRender(r => !r) // why arrow function is used here? what will happen if we use setRender(!render) instead of setRender(r => !r) ?
//     }, 5000)
//   },[])

//   return (
//     <>
//     {render ? <MyComponent/> : <h2>NAHI HAI <KUCH></KUCH></h2> }
//     </>
//   )
// }

// function MyComponent() {
//   useEffect(()=>{
//     console.log('Component mounted')
//     return () => {
//       console.log('Component unmounted')
//     }
//   }, [])

//   return (
//     <h1>My Component</h1>
//   )
// }

// export default App

//? useTodos custom hook
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function useTodos(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     // setTimeout(() => {
//     //   axios.get("https://sum-server.100xdevs.com/todos")
//     //     .then(res => {
//     //       setTodos(res.data.todos);
//     //       setLoading(false);
//     //     })
//     // },1000)
//     setLoading(true);
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//         .then(res => {
//           setTodos(res.data.todos);
//           setLoading(false);
//         })
//     },1000 * n )

//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(res => {
//       setTodos(res.data.todos);
//       setLoading(false);
//     })

//     return () => {
//       clearInterval(value);
//     }
//   }, [n])

//   return {todos, loading};
// }

// function App() {
//   const {todos, loading} = useTodos(2);
//   if(loading) {
//     return <h1>Loading...</h1>
//   }
//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App


//? useIsOnline custom hook
// import { useEffect, useState } from 'react'

// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener('online', () => setIsOnline(true));
//     window.addEventListener('offline', () => setIsOnline(false));
//   }, [])

//   return isOnline;
// }

// function App() {
//   const isOnline = useIsOnline();

//   return (
//     <>
//       {isOnline ? "You are online yay!" : "You are not online"}
//     </>
//   )
// }

// export default App

//? useMousePointer custom hook

import { useEffect, useState } from 'react'

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

function App() {
  const mousePointer = useMousePointer();

  return (
    <>
      Your mouse position is {mousePointer.x} {mousePointer.y}
    </>
  )
}

export default App