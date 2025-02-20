import TodoItem from './TodoItem'
import { ITodoItem } from '../../types'

interface TodoListProps {
  todos: ITodoItem[];
  deleteTodo: (id: number) => void;
}
function TodoList({ todos, deleteTodo }: TodoListProps ) {
  return (
    <div>
      {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}

export default TodoList