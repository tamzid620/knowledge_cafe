import React from 'react';
import './Time.css'


const Time = (props) => {
    const time = props.time;    



let  total = 0;
for(const news of time){
    total =  total + news.readTime;
}
    
    return (
        <div>
            <h6 className='cart-time fw-bold mb-4 p-3 rounded-4 '>Spent time on read:{total} min </h6>
        </div>
    );
};

export default Time;