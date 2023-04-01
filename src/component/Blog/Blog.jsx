import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import ReadTime from "../ReadTime/ReadTime";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const [totalTime, setTotalTime] = useState(0);
  const spendTimeToRead = (readTime) => {
    setTotalTime(prevTotalTime => prevTotalTime + readTime);
  }

  const btnBookmark = (blog) => {
    const gotoBookmark = [...post, blog];
    setPost(gotoBookmark);
  };

 
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="cols-span-2">
        {blogs.map((blog) => (
          <Post key={blog.id} blog={blog} btnBookmark={btnBookmark} spendTimeToRead = {spendTimeToRead}></Post>
        ))}
      </div>
      <div>
        <div>
          <ReadTime time = {totalTime}></ReadTime>
        </div>
        <h2>Bookmarked Blogs: {post.length}</h2>
        <h2>${post}</h2>
      </div>
    </div>
  );
};

export default Blog;
