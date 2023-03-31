import React from "react";

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
  return (
    <div>
      <img className="w-auto my-5" src={image} alt="" />
      <div className="flex justify-between">
        <div className="flex">
          <img className="h-14" src={parsonProfile} alt="" />
          <div className="ml-5">
            <h3>{authorName}</h3>
            <h5>{publishDate}</h5>
          </div>
        </div>
        <h5 className="">{readTime} min read</h5>
      </div>
      <h2 className="text-4xl font-bold my-5">{blogTitle}</h2>
      <p>{tages}</p>
    </div>
  );
};

export default Post;