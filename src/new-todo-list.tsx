import { Todo } from "./App";
import TodoItem from "./todo-item";

interface NewTodoListProps {
  todos: Todo[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

const NewTodoList: React.FC<NewTodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  if (todos.length === 0) {
    return <p className="no-todos">No Todos</p>;
  }

  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default NewTodoList;
