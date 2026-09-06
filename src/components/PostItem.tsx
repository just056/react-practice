import React from 'react';
import Input from "./ui/Input/Input";
import {post, removePost} from "../App";
import Button from "./ui/Button/Button";

export type props = {
    post: post,
    removePost : removePost;
}

const PostItem = (props : props) => {
    const post = props.post;
    const removePost = props.removePost;
    const [title, body] = [post.title, post.body];

    const tryRemovePost = () => {
        removePost(post);
    }

    return (
        <div className="post">
            <div className="post-content">
                <strong>{title}</strong>
                <p>{body}</p>
            </div>
            <Button onClick={tryRemovePost}>Remove</Button>
        </div>
    );
};

export default PostItem;