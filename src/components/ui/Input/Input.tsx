import React from 'react';
import classes from "./Input.module.css";

type props = {
    type: string;
    placeholder: string;

    value?: string;
    onChange?: (e: any) => void;
}

const Input = (props: props) => {
    return (
        <input className={classes.input} {...props}/>
    );
};

export default Input;