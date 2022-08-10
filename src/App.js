import React, { useMemo, useState } from "react";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);

  const [selectedStor, setSelectedStor] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("Сортировка");
    if (selectedStor) {
      return [...posts].sort((a, b) =>
        a[selectedStor].localeCompare(b[selectedStor])
      );
    } else {
      return posts;
    }
  }, [selectedStor, posts]);

    const sortPosts = (sort) => {
    setSelectedStor(sort);
  };
  const sortedAndSerchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => {
      return post.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery, sortedPosts]);



  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }}></hr>
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={"Поиск..."}
        />
        <MySelect
          value={selectedStor}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По заголовку" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {sortedAndSerchedPosts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedAndSerchedPosts}
          title="Список постов"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
