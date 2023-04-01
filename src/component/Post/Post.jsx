import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Post.css";

const Post = (props) => {
  const {
    authorName,
    image,
    blogTitle,
    parsonProfile,
    readTime,
    publishDate,
    tages,
  } = props.blog;

  const addToBookmark = props.addToBookmark;
  const spendTimeToRead = props.spendTimeToRead;

  const [bookmarkClickCount, setBookmarkClickCount] = useState(0);

  const handleAddBookmarked = () => {
    addToBookmark(props.blog);
    setBookmarkClickCount(bookmarkClickCount + 1);
    if (bookmarkClickCount > 0) {
      toast.warn("You have already bookmarked this blog!");
    }
  };

  return (
    <div className="border-b border-slate-300">
      <img className="w-auto my-5" id="post-coverimg" src={image} alt="" />
      <div className="flex justify-between">
        <div className="flex">
          <img className="h-14" src={parsonProfile} alt="" />
          <div className="ml-5">
            <h3 className="text-2xl font-bold">{authorName}</h3>
            <h5 className="text-stone-500 font-semibold">{publishDate}</h5>
          </div>
        </div>
        <h5 className="text-stone-500 font-semibold">
          {readTime} min read{" "}
          <button onClick={handleAddBookmarked}>
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </h5>
      </div>
      <h2 className="text-4xl font-bold my-5">{blogTitle}</h2>
      <p className="text-stone-500 font-semibold">{tages}</p>
      <div>
        <button
          className="my-5 underline"
          onClick={() => spendTimeToRead(readTime)}
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default Post;
