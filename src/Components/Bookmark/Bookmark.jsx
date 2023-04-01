import React, { useState } from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    const bookmark = props.bookmark
    // const {blogTitle} = props.blogTitles

// const [blogTitles, setBlogTitles]= useState([]);


const handelAddToCart = () => {
    const titles = bookmark.map(news => news.blogTitle);
    setBlogTitles(titles);  

}


let totalBlog ='';
for(const news of bookmark ){
    totalBlog= totalBlog + news.blogTitle;
    }


    return (
        <div onClick={handelAddToCart}>
          <p>{totalBlog}</p>
          <p>{totalBlog}</p>
          <p>{totalBlog}</p>
          <p>{totalBlog}</p>
          <p>{totalBlog}</p>
          <p>{totalBlog}</p>
           {/* <h4>{blogTitle}</h4> */}
        </div>
    );
  };


export default Bookmark;


