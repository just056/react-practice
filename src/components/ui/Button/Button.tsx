import React, {ReactNode} from 'react';
import classes from "./Button.module.css";

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
}

const Button = ({children, ...props} : props) => {
    return (
        <button className={classes.btn} {...props}>
            {children}
        </button>
    );
};

export default Button;