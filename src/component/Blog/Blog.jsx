import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid cols-span-2">
        {blogs.map((blog) => (
          <Post key={blog.id} blog={blog}></Post>
        ))}
      </div>
      <div>

      </div>
    </div>
  );
};

export default Blog;
