import React, { useEffect, useMemo, useState } from "react";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts, useSortedPosts } from "./hooks/usePosts";

import PostService from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSerchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setІsPostsLoading] = useState(false);
  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    setІsPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setІsPostsLoading(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />

      {isPostsLoading ? (
        <h1>Идет загрузка...</h1>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSerchedPosts}
          title="Список постов"
        />
      )}
    </div>
  );
}

export default App;
