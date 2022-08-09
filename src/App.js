import React, { useState } from "react";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);

 const createPost = (newPost)=>
 {
  setPosts([...posts,newPost])
 }



  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
