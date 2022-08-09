import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import React, { useState } from "react";

const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost)
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        type="text"
        value={post.title}
        placeholder="Название поста"
        onChange={(event) => {
          setPost({ ...post, title: event.target.value });
        }}
      />

      <MyInput
        value={post.body}
        type="text"
        placeholder="Описание поста"
        onChange={(event) => {
          setPost({ ...post, body: event.target.value });
        }}
      />
      <MyButton type="submit" onClick={addNewPost}>
        Создать пост
      </MyButton>
    </form>
  );
};

export default PostForm;
