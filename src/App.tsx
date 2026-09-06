import React, {useRef, useState} from 'react';
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import "./styles/App.css"
import Posts from "./components/Posts";
import Form from "./components/Form";

export interface post {
  id : number,
  title: string,
  body: string,
}

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

  return (
    <div className="App">
      <Form createPost = {createPost}></Form>
      <Posts posts={posts}></Posts>
    </div>
  );
}

export default App;
