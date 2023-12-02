import { Todo } from "./app"
import TodoItem from "./todo-item"

const NewTodoList: React.FC<NewTodoListProps>= ({todos,toggleTodo,deleteTodo}) => {
    return(
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(item => 
            (
                <TodoItem
                todo={item}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                key={item.id} 
                />
            )
        )}
        </ul>
    )
}

export default NewTodoList;

interface NewTodoListProps {
    todos:Todo[];
    toggleTodo:(id: string, completed: boolean) => void;
    deleteTodo:(id: string) => void;
}