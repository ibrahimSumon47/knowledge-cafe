import React from "react";
import BookmarkedTitle from "../BookmarkedTitle/BookmarkedTitle";

const Bookmarked = ({ bookmarked }) => {
  const quantity = bookmarked.length;
  return (
    <div>
      <h2 className=" p-5 rounded-lg my-5 text-3xl font-bold">
        Bookmarked Blogs: {quantity}
      </h2>
      {bookmarked.map((bookmark) => (
        <BookmarkedTitle
          key={bookmark.id}
          bookmark={bookmark}
        ></BookmarkedTitle>
      ))}
    </div>
  );
};

export default Bookmarked;
