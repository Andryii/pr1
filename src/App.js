import React, { useRef, useState } from "react";
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

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault()
    // setPosts([...posts, { id: 4, title: title, body: body }]);
    console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          type="text"
          value={title}
          placeholder="Название поста"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <MyInput
          ref = {bodyInputRef}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton  type="submit" onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
