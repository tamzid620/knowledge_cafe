import React from 'react';
import './News.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const News = (props) => {
    const {id, authorName, blogTitle, coverImage, authorImage, readTime, publishDate} = props.news

    const handelAddToCart = props.handelAddToCart;
    const handelSpendTime = props.handelSpendTime;
    
    

    return (
        <div className='news'>
            <div className='coverImage'>
            <img className='rounded-top  mb-3 coverImage' src={coverImage} alt="" />
            </div>
                <div className='d-flex justify-content-between ms-2 me-2'>
                <div className='d-flex'>
                    <div className='authorImage'><img  src={authorImage} alt="" /></div>
                
                    <div className='ms-3'>
                        <div><h5 className='fw-bold '>{authorName}</h5></div>
                        <div><p className='text-secondary fw-semibold'>{publishDate}</p></div>
                    </div>
                </div>
                <div className='d-flex'>
                    <p className='fw-semibold text-secondary'>{readTime} min read</p>
                    <div onClick={()=> handelAddToCart(props.news)} className='btn-bookmark ms-1'><FontAwesomeIcon icon={faBookmark} /></div>
                    </div>
                </div>
            <h2 className='blogTitle ms-2'>{blogTitle}</h2>
            <div className='d-flex ms-2 text-secondary fw-semibold mt-4'>
                <p>#beginners</p>
                <p className='ms-3'>#programming</p>
            </div>
            <div onClick={ ()=> handelSpendTime(props.news)} className='markAsRead mt-4 ms-2 fw-semibold'>Mark as read</div>
        </div>
    );
};

export default News;