import { useState } from "react"
import "./style.css"

export default function App(){
  const[newItem,setNewItem] = useState<string>("")
  const [todos,setTodos] = useState<Todo[]>([])

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    
    setTodos(currentTodos =>{
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })
      setNewItem("")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
           value={newItem} 
           onChange={e => setNewItem(e.target.value)}
           type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">

        {todos.map(todo => {
          return(
            <li key={todo.id}>
              <label>
              <input type="checkbox" checked={todo.completed}/>
              {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

interface Todo {
  id: string,
  title: string,
  completed: boolean
}