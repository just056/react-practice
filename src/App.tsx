import React, {useRef, useState} from 'react';
import "./styles/App.css"
import Posts from "./components/Posts";
import Form from "./components/Form";

export interface post {
  id : number,
  title: string,
  body: string,
}

export type removePost = (post : post) => void
export type sortPosts = (sort : keyof post) => void

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "JS1", body: "Description3"},
    {id: 2, title: "JS2", body: "Description2"},
    {id: 3, title: "JS3", body: "Description1"},
  ]);

  const bodyInputRef = useRef(null);

  const createPost = (post : post) => {
    setPosts([...posts, post]);
  }

  const removePost: removePost = (post: post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  const sortPosts: sortPosts= (sort) => {
    if (sort === "id") return

    setPosts([...posts].sort(
        (a:post, b:post) => a[sort].localeCompare(b[sort])
    ))
  }

  return (
    <div className="App">
      <Form createPost = {createPost}></Form>
      <hr/>
      <Posts posts={posts} removePost={removePost} sortPosts={sortPosts}></Posts>
    </div>
  );
}

export default App;
