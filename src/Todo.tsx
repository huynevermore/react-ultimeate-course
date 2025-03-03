import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { TodoProvider } from './context/TodoContext';

/*
CRUD -> call api -> show loading -> success -> hide loading
- create
- delete
- show
*/

function Todo() {
  return (
    <TodoProvider>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
              <TodoForm />
            </div>
          </div>
          <div>
            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default Todo