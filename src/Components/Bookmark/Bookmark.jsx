
import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
  const bookmark = props.bookmark 
  return (
    <div className='blogtitle'>
      {bookmark.map((news) => (
                <h6>{news?.blogTitle}</h6>
      ))}
    </div>
  );
};

export default Bookmark;


