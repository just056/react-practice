import React, {ReactNode} from 'react';
import classes from "./Button.module.css";

type props = {
    children: ReactNode
}

const Button = ({children, ...props} : props) => {
    return (
        <button className={classes.btn} {...props}>
            {children}
        </button>
    );
};

export default Button;