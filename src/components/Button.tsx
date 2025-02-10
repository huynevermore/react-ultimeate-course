
interface ButtonProps {
    text?: string;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode,
    [key: string]: any
}

function Button({ text = 'Default Button', children, ...restProps }: ButtonProps) {
    return (
        <button {...restProps}>
            {text} <br />
            {children}
        </button>
    )
}

export default Button