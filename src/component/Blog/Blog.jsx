import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import ReadTime from "../ReadTime/ReadTime";
import Bookmarked from "../Bookmarked/Bookmarked";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const [bookmarked, setBookmarked] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const [totalTime, setTotalTime] = useState(0);
  const spendTimeToRead = (readTime) => {
    setTotalTime((prevTotalTime) => prevTotalTime + readTime);
  };

  return (
    <div>
      <div className="md:grid grid-cols-3 gap-4">
        <div className="md:col-span-2">
          {blogs.map((blog) => (
            <Post
              key={blog.id}
              blog={blog}
              spendTimeToRead={spendTimeToRead}
              addToBookmark={(bookmark) =>
                setBookmarked([...bookmarked, bookmark])
              }
            ></Post>
          ))}
        </div>
        <div>
          <div>
            <ReadTime time={totalTime}></ReadTime>
          </div>
          <div className="border rounded-lg p-5 bg-stone-200">
            <Bookmarked bookmarked={bookmarked}></Bookmarked>
          </div>
        </div>
      </div>
      <h2>All Q&A</h2>
      <div className="bg-stone-200">
        <div className="border p-5 rounded-lg bg-slate-50">
          <h3>Q.Props vs state?</h3>
          <h4>
            Ans. Props: Properties short from we call it props and props use for
            pass data from a parent component to a child component. But props
            can read only can not modify. State: State is used to manage data
            that changes over time within a component. In state child can modify
            data.
          </h4>
        </div>
        <div className="p-5 rounded-lg">
          <h3>Q. How does useState work?</h3>
          <h4>
            Ans. useState is a built in function components to have state.The
            useState hook takes an initial value as an argument and returns an
            array with two elements: the current state and a function to update
            the state.
          </h4>
        </div>
        <div className="border p-5 rounded-lg bg-slate-50">
          <h3>Q. Purpose of useEffect other than fetching data.</h3>
          <h4>
            Ans. useEffect can be used to update the document title when the
            component mounts or when certain state variables change. This can be
            useful for providing context to the user about what they're viewing.
          </h4>
        </div>
        <div className="p-5 rounded-lg">
          <h3>Q. How Does React work?</h3>
          <h4>
            Ans. React is a JS library for build in user interface. Virtual
            DOM,some components are build in in react.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Blog;
