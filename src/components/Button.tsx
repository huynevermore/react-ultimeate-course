import styles from './button.module.css';

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
        <button {...restProps} className={styles.outline}>
            {text} <br />
            {children}
        </button>
    )
}

export default Button;

/* props: icon, outline = true/false, isLoading


const className = "xxxxxxxx"
if(!outline) {
    className += "outline-0"
}
return (
    <>
        {(!isLoading && icon && <>icon</>}
        {isLoading && <div>loading</div>}
        <button className={className}>xxx</button>
    </>
)


*/