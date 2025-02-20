import { ITodoItem } from "../../types";


interface TodoCountProps {
  todos: ITodoItem[];
}

function TodoCount({ todos }: TodoCountProps) {
  return (
    <div>Todo Count: {todos.length}</div>
  )
}

export default TodoCount