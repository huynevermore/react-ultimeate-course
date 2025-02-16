import React from "react"
import Todos from "./components/LiftingStateUp/Todos"
import TodoCount from "./components/LiftingStateUp/TodoCount"
import TodoForm from "./components/LiftingStateUp/TodoForm"

function LiftingStateUp() {
    const [todos, setTodos] = React.useState([])
    return (
        <div>
            <h1>LiftingStateUp</h1>
            <TodoCount /><br />
            <TodoForm /><br />
            <Todos />
        </div>
    )
}

export default LiftingStateUp