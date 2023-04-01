import React from 'react';

const BookmarkedTitle = (props) => {
    const {blogTitle} = props.bookmark;
    return (
        <div>
          <h4>{blogTitle}</h4>  
        </div>
    );
};

export default BookmarkedTitle;