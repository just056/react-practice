import React from 'react';
import {post, removePost, sortPosts} from "../App";
import PostItem from "./PostItem";
import Select, {option} from "./ui/Select/Select";

type props = {
    posts : post[]
    removePost : removePost
    sortPosts : sortPosts
}

const Posts = (props : props) => {
    const posts = props.posts;
    const [sort, setSort] = React.useState("name" as keyof post);

    const removePost = props.removePost;
    const sortPosts = props.sortPosts;

    const options = [
        {value: "title" as keyof post, name: "By Title"},
        {value: "body" as keyof post, name: "By Description"}]

    return (
        <div className="posts">
            <h1>Posts</h1>
            <Select options={options}
                    defaultValue="Sort by"
                    value={sort}
                    onChanged={(e) => {
                        setSort(e)
                        sortPosts(e)
            }}></Select>
            {posts.length == 0?
                <p>No posts</p>:
                posts.map((post: post) => (
                    <PostItem post={post} removePost={removePost} key={post.id}></PostItem>)
                )
            }
        </div>
    );
};

export default Posts;