import React from 'react'
import TextButton from './components/Button/TextButton';
import { useTodoContext } from './context/TodoContext';

function TodoForm() {
  const { addTodo } = useTodoContext();
  const [title, setTitle] = React.useState('');

  function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }

  return (
    <>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        value={title}
        onChange={onChangeTitle}
      />
      <TextButton 
        buttonText='Add'
        onClick={() => {
          addTodo(title)
        }}
      />
    </>
  )
}

export default TodoForm