import { useEffect, useState } from "react"
import "./style.css"
import NewTodoForm from "./new-todo-forms"
import NewTodoList from "./new-todo-list"

export default function App(){
  const [todos,setTodos] = useState<Todo[]>(() =>{
    const localValue = localStorage.getItem('Items')
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('Items',JSON.stringify(todos))
  },[todos])

  function addTodo(title:string) {
    setTodos(currentTodos =>{
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }
  function toggleTodo(id:string, completed:boolean){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id:string){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <NewTodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export interface Todo {
  id: string,
  title: string,
  completed: boolean
}