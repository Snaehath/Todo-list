import { Todo } from "./app"

const TodoItem: React.FC<TodoItemProps> = ({todo:{completed,id,title},toggleTodo,deleteTodo}) => {
    return(
        <li>
            <label>
            <input type="checkbox" 
            checked={completed} 
            onChange={e => toggleTodo(id,e.target.checked)}
            />
            {title}
            </label>
            <button 
            onClick={() => deleteTodo(id)} 
            className="btn btn-danger">Delete
            </button>
        </li>
    )
}
export default TodoItem;

interface TodoItemProps {
    todo:Todo,
    toggleTodo:(id: string, completed: boolean) => void;
    deleteTodo:(id: string) => void;
}