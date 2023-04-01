import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

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
  
  const btnBookmark = props.btnBookmark;
  
  return (
    
      <div>
        <img className="w-auto my-5" src={image} alt="" />
        <div className="flex justify-between">
          <div className="flex">
            <img className="h-14" src={parsonProfile} alt="" />
            <div className="ml-5">
              <h3 className="text-2xl font-bold">{authorName}</h3>
              <h5>{publishDate}</h5>
            </div>
          </div>
          <h5 className="">
            {readTime} min read{" "}
            <button onClick={() => btnBookmark(props.blog)}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </h5>
        </div>
        <h2 className="text-4xl font-bold my-5">{blogTitle}</h2>
        <p>{tages}</p>
        <div>
          <button className="mt-5 underline">Mark as read</button>
        </div>
      </div>
  );
};

export default Post;
