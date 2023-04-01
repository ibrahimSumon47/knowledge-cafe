import React from "react";

const BookmarkedTitle = (props) => {
  const { blogTitle } = props.bookmark;
  return (
    <div>
      <h4 className="border bg-slate-100 p-5 rounded-lg my-5 text-2xl font-bold">
        {blogTitle}
      </h4>
    </div>
  );
};

export default BookmarkedTitle;
