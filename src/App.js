import React from "react";
import {
  BrowserRouter,
  Link,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import About from "./pages/About";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about/posts" element={<Posts />} />
        <Route path="/*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
