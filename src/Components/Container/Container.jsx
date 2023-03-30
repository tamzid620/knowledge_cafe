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
                {/* question and answer part  */}
                <h1 className='questions mb-5'>Common Question About React </h1>
<div>
<h3>questions-1: Difference between props and State?</h3>
<p className='text-secondary'><span className='text-danger'>ANS: </span>  props are used to pass data from a parent component to a child component. <br /> and  <br /> state is used to manage data that can change within a component.</p>
<h3>questions-2: How does useState works?</h3>
<p className='text-secondary'><span className='text-danger'>ANS: </span>  useState is used to manage state within a functional component. It allows us to declare a state variable and provide a function to update the state.</p>
<h3>questions-3: what can useeffect do besides data load?</h3>
<p className='text-secondary'><span className='text-danger'>ANS: </span> provides a flexible way to manage side effects within a React component,  like : <br />
useEffect can do fetch API data. <br />
can do  state change: validating input field. <br />
can do  state change: live filtering. <br />
can do  state change: trigger animation on new array value. <br />
can do  props change: update paragraph list on fetched API data update. <br />
can do  props change: updating fetched API data to get BTC updated price.</p>
<h3>questions-4: How does React works?</h3>
<p className='text-secondary'><span className='text-danger'>ANS: </span>  React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of those components. </p>
</div>

            </div>
            <div className='col bookmark-container'>
                <div className='bookmark-time mb-4 p-3 rounded-4'><h6 className='fw-bold'>Spent time on read: </h6></div>
                <div className='bookmarkedBlog p-3 rounded-2'><h6 className='fw-bold'>bookmaed Blog: </h6></div>
            </div>
        </div>
    );
};

export default Container;