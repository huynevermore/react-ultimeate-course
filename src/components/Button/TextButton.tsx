interface TextButtonProps {
  buttonText: string,
  className?: string,
  onClick?: () => void
}

function TextButton({ buttonText, className, onClick }: TextButtonProps) {
  return (
    <button 
      className={`flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
}

export default TextButton