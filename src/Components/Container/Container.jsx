import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './Container.css'

const Container = () => {
const [ news, setNews] = useState([])

useEffect(()=> {
    fetch ('info.json')
    .then(res => res.json())
    .then(data => setNews(data))
}, [])

    return (
        <div className='container'>
             <div className='col content-container'>
                {
                    news.map(news=> <News 
                        key={news.id}
                        news ={news}
                        ></News>)
                }
                question and ans
            </div>
            <div className='col bookmark-container'>
                <div className='bookmark-time mb-4 p-3 rounded-4'><h6 className='fw-bold'>Spent time on read: </h6></div>
                <div className='bookmarkedBlog p-3 rounded-2'><h6 className='fw-bold'>bookmaed Blog: </h6></div>
            </div>
        </div>
    );
};

export default Container;