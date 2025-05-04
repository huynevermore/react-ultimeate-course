import React from 'react'
import { useParams } from 'react-router-dom'

function TodoRouteShow() {
  const [todo, setTodo] = React.useState<any>(null);
  const params = useParams();
  console.log('params: ', params)

  React.useEffect(() => {
    if (!params?.todoId) return;

    async function fetchTodo() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);
      const data = await res.json();
      setTodo(data)
    }
    fetchTodo();
  }, [params])    


  return (
    <div>
      <h2>TodoRouteShow</h2>

      {todo && (
        <>
          Title: {todo.title}
        </>
      )}
    </div>
  )
}

export default TodoRouteShow