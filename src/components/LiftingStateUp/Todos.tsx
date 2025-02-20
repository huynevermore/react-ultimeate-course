import { ITodoItem } from '../../types';
import TodoList from './TodoList'

interface TodosProps {
  todos: ITodoItem[];
  deleteTodo: (id: number) => void;
}

function Todos({ todos, deleteTodo }: TodosProps) {
  return (
    <div>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default Todos