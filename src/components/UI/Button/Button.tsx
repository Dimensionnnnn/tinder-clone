import { HTMLAttributes } from 'react';
import styles from './Button.module.css'

type ButtonProps = {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ className, onClick, children, ...props }) => {
    return (
        <button
            className={className ? className : styles.button} 
            onClick={onClick} 
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;