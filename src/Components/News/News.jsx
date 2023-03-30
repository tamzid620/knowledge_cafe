import React from 'react';
import './News.css'

const News = ({news}) => {
    return (
        <div className='news'>
            <img className='rounded-top  mb-3' src={news.coverImage} alt="" />
            <div className='d-flex justify-content-between ms-2 me-2'>
                <div className='d-flex'>
                    <div className='authorImage'><img src={news.authorImage} alt="" /></div>
                
                    <div className='ms-3'>
                        <div><h5 className='fw-bold '>{news.authorName}</h5></div>
                        <div><p className='text-secondary fw-semibold'>{news.publishDate}</p></div>
                    </div>
                </div>
                <div className='d-flex'>
                    <p className='fw-semibold text-secondary'>{news.readTime}</p>
                    <button></button>
                    </div>
            </div>
        </div>
    );
};

export default News;