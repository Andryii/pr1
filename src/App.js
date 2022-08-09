import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { id: Date.now(), ...post }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <form>
        <MyInput
          type="text"
          value={post.title}
          placeholder="Название поста"
          onChange={(event) => {
            setPost({...post,title: event.target.value});
          }}
        />

        <MyInput
          value={post.body}
          type="text"
          placeholder="Описание поста"
          onChange={(event) => {
            setPost({...post,body: event.target.value});
          }}
        />
        <MyButton type="submit" onClick={addNewPost}>
          Создать пост
        </MyButton>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
