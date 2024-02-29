
export function CreateTodo() {
  return (
    <>
      <input style={{
        width: '80%',
        height: '30px',
        fontSize: '20px',
        padding: '10px',
        margin: '10px 0'
      }} type="text" placeholder="title" /> <br />
      <input style={{
        width: '80%',
        height: '30px',
        fontSize: '20px',
        padding: '10px',
        margin: '10px 0'
      }} type="text" placeholder="description" />

      <button style={{
        width: '80%',
        height: '30px',
        fontSize: '20px',
        padding: '15px',
        margin: '10px 0',
        backgroundColor: 'green',
        color: 'white'
      }} >Add a todo</button>
    </>
  )
}