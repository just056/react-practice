import React from 'react';
import Input from "./ui/Input/Input";
import {post} from "../App";
import Button from "./ui/Button/Button";

const PostItem = (props :{post: post}) => {
    const post = props.post;
    const [title, body] = [post.title, post.body];

    return (
        <div className="post">
            <div className="post-content">
                <strong>{title}</strong>
                <p>{body}</p>
            </div>
            <Button>Remove</Button>
        </div>
    );
};

export default PostItem;