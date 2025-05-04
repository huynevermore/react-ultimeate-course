import React from 'react'
import TodoForm from './TodoForm'
import { useNavigate, useSearchParams } from 'react-router-dom';

function TodoList({ todos }: any) {
  const navigate = useNavigate();
  return (
    <>
      {todos.map((todo: any) => (
        <div key={todo.id}>
          Title: {todo.title} <br />
          <button type="button" onClick={() => navigate(`/todo/${todo.id}`)}>View Detail</button>
        </div>
      ))}
    </>
  )
}


function TodoRoute() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const _page = searchParams.get("page");
  const [page, setPage] = React.useState(_page ? Number(_page) : 1)
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    navigate(`/todo?page=${page}`, {
      replace: true
    })
    async function fetchTodo() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5&_page=${page}`);
      const data = await res.json();
      setTodos(data)
    }
    fetchTodo();
  }, [page])    

  console.log('todos: ', {
    todos,
    _page
  })

  function onPrev() {
    setPage(prevState => prevState - 1)
  }

  async function onNext() {
    // callback function of useState (syntax arrow function)
    // react: updater function
    // setPage(prevState => {
    //   const newPage = prevState + 1;
    //   navigate(`/todo?page=${newPage}`)
    //   return newPage
    // });
    setPage(prevState =>  prevState + 1);
  }

  return (
    <div>
      <TodoForm />
      <TodoList todos={todos} />

      <br />
      <button type="button" onClick={onPrev}>Prev</button>
      <span>Page: {page}</span>
      <button type="button" onClick={onNext}>Next</button>
    </div>
  )
}

export default TodoRoute