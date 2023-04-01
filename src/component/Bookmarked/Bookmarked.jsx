import React from 'react';
import BookmarkedTitle from '../BookmarkedTitle/BookmarkedTitle';


const Bookmarked = ({bookmarked}) => {
    const quantity = bookmarked.length;
    return (
        <div>
            <h2>Bookmarked Blogs: {quantity}</h2>
            {
                bookmarked.map(bookmark => <BookmarkedTitle key = {bookmark.id} bookmark = {bookmark}></BookmarkedTitle>)
            }
        </div>
    );
};

export default Bookmarked;
