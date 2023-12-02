import { useState } from "react"

const NewTodoForm:React.FC<NewTodoFormProps> = ({onSubmit})=>{
    const[newItem,setNewItem] = useState<string>("")

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if (newItem === "") return
        onSubmit(newItem)

        setNewItem("")
      }
    return (
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
    )
}

export default NewTodoForm;

interface NewTodoFormProps {
  onSubmit: (title: string) => void;
}