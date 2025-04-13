import React from 'react';

export interface ITodoItem {
  id: number,
  title: string
}

interface ITodoContext {
  isLoading: boolean,
  error: string,
  todos: ITodoItem[],
  toggleShowLoading: () => void,
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
}

export const TodoContext = React.createContext<ITodoContext>({
  isLoading: false,
  error: '',
  todos: [],
  toggleShowLoading() {},
  addTodo() {},
  removeTodo() {}
});

export const TodoProvider = ({ children }: React.PropsWithChildren) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error] = React.useState('');
  const [todos, setTodos] = React.useState<ITodoItem[]>([]);

  function toggleShowLoading() {
    setIsLoading(prevState => !prevState)
  }

  function addTodo(title: string) {
    const todoItem = {
      id: Date.now(),
      title
    }
    setTodos(prevState => [...prevState, todoItem])
  }

  function removeTodo(id: number) {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  }

  return (
    <TodoContext.Provider 
      value ={{
        // states
        isLoading,
        error,
        todos,
        // actions
        toggleShowLoading,
        addTodo,
        removeTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
};

export const useTodoContext = () => React.useContext(TodoContext)