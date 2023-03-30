import React from 'react';
import './Time.css'


const Time = (props) => {
    const time = props.time;    



let  total = 0;
for(const news of time){
    total =  total + news.readTime;
}
    
// const time = (props)=>{
//     const time = props.time;
//     }
    return (
        <div>
            <h6 className='fw-bold'>Spent time on read:{total} min </h6>
        </div>
    );
};

export default Time;