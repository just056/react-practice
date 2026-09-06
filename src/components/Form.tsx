import React, {useState} from 'react';
import Input from "./ui/Input/Input";
import Button from "./ui/Button/Button";
import {post} from "../App";

type props = {
    createPost: (post : post) => void
}

const Form = (props: props) => {
    const createPost = props.createPost
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const tryCreatePost = (e: MouseEvent) => {
        e.preventDefault();
        const post = {
            id: Date.now(),
            title : title,
            body : desc,
        }
    }

    return (
        <form className="form">
            <h3>Create Post</h3>
            <Input
                type="text"
                placeholder="Name"
                value={title}
                onChange={e => setTitle(e.target.value)}>
            </Input>
            <Input
                type="text"
                placeholder="Description"
                value={desc}
                onChange={e => setDesc(e.target.value)}>

            </Input>
            <Button onClick={tryCreatePost}>Create</Button>
        </form>
    );
};

export default Form;