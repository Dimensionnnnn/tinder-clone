import { HTMLAttributes } from 'react';
import styles from './Input.module.css';

type InputProps = {
    className?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & HTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ className, value, onChange, ...props }) => {
    return (
        <input
            className={className ? className : styles.input}
            value={value}
            onChange={onChange}
            {...props}
        />
    )
}

export default Input;