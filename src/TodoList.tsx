import { useTodoContext } from './context/TodoContext'
import TodoItem from './TodoItem';

function TodoList() {
  const { todos } = useTodoContext();

  return (
    <>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          title={todo.title}
          id={todo.id}
        />
      ))}
    </>
  )
}

export default TodoList