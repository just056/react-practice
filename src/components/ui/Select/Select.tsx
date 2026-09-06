import React, {ReactNode} from 'react';
import classes from "./Select.module.css";

export interface option {value : string, name : string}

interface props<T extends option[]> extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: T,
    defaultValue: string,
    value : T[number]["value"],
    onChanged: (e: T[number]["value"]) => void
}

const Select = <T extends option[]>({options, defaultValue, onChanged, value} : props<T>) => {
    return (
        <select className={classes.select} onChange={e => onChanged(e.target.value as T[number]["value"])} value={value}>
            <option disabled value="">{defaultValue}</option>
            {options.map(item =>
            <option value={item.value} key={item.value}>{item.name}</option>
            )}
        </select>
    );
};

export default Select;