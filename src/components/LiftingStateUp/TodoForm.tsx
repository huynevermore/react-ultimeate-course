import React from 'react';

interface TodoFormProps {
    addTodo: (title: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [title, setTitle] = React.useState("");

  function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }

  return (
    <div>
        <input type="text" onChange={onChangeTitle}/>
        <button type="button" onClick={() => addTodo(title)}>Add Todo</button>
    </div>
  )
}

export default TodoForm