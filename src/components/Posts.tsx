import React from 'react';
import {post} from "../App";
import PostItem from "./PostItem";

type props = {
    posts : post[]
}

const Posts = (props : props) => {
    const posts = props.posts;

    return (
        <div className="posts">
            <h1>Posts</h1>
            {posts.length == 0?
                <p>No posts</p>:
                posts.map((post: post) => (
                    <PostItem post = {post} key = {post.id}></PostItem>)
                )
            }
        </div>
    );
};

export default Posts;