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
            <div className=' content-container'>
                {
                    news.map(news=> <News 
                        key={news.id}
                        news ={news}
                        ></News>)
                }
            </div>
            <div className='bookmark-container'>
                <h3>Ami seikhane</h3>
            </div>
        </div>
    );
};

export default Container;