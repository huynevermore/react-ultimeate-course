import TextButton from './components/Button/TextButton'
import { useTodoContext } from './context/TodoContext'

interface TodoItemProps {
  title: string,
  id: number
}

function TodoItem({ title, id }: TodoItemProps) {
  const { removeTodo } = useTodoContext();

  return (
    <div className="flex mb-4 items-center">
      <p className="w-full text-grey-darkest">
       {title}
      </p>
      <TextButton 
        buttonText='Done'
      />
      <TextButton 
        buttonText='Remove'
        className='bg-[#f00] text-white'
        onClick={() => {
          removeTodo(id)
        }}
      />
    </div>
  )
}

export default TodoItem