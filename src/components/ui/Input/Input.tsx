import React from 'react';
import classes from "./Input.module.css";

interface props extends React.HTMLProps<HTMLInputElement> {
    type: string;
    placeholder: string;
}

const Input = (props: props) => {
    return (
        <input className={classes.input} {...props}/>
    );
};

export default Input;