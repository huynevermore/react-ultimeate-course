import { ITodoItem } from '../../types'

interface TodoItemProps {
  todo: ITodoItem;
  deleteTodo: (id: number) => void
}

function TodoItem({ todo, deleteTodo }: TodoItemProps) {
  return (
    <div>
        Title: {todo.title} <button type="button" onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
    </div>
  )
}

export default TodoItem