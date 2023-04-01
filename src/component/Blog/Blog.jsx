import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const btnBookmark = (blog) => {
    const gotoBookmark = [...post, blog];
    setPost(gotoBookmark);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid cols-span-2">
        {blogs.map((blog) => (
          <Post key={blog.id}
          blog={blog}
          btnBookmark ={btnBookmark}></Post>
        ))}
      </div>
      <div>Bookmarked Blogs: {post.length}</div>
    </div>
  );
};

export default Blog;
