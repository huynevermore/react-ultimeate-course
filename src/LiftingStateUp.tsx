import React from "react"
import Todos from "./components/LiftingStateUp/Todos"
import TodoCount from "./components/LiftingStateUp/TodoCount"
import TodoForm from "./components/LiftingStateUp/TodoForm"
import { ITodoItem } from "./types";

function LiftingStateUp() {
    const [todos, setTodos] = React.useState<ITodoItem[]>([]);

    function addTodo(title: string) {
        const todoItem = {
            id: Date.now(),
            title: title + (todos.length + 1),
        }
        setTodos(prevState => ([...prevState, todoItem]))
    }

    function deleteTodo(todoId: number) {
        console.log('delte todo', todoId)
    }
    
    console.log('lifting state up')

    return (
        <div>
            <h1>LiftingStateUp</h1>
            <TodoCount todos={todos}/><br />
            <TodoForm addTodo={addTodo} /><br />
            <Todos todos={todos} deleteTodo={deleteTodo} />
        </div>
    )
}

export default LiftingStateUp