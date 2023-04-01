import React, { useEffect, useState } from 'react';
import Time from '../Time/Time';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import Bookmark from '../Bookmark/Bookmark';

const Cart = (props) => {
    const cart = props.cart;

    // const [blogTitles, setBlogTitles]= useState([]);
    // useEffect(()=> {
    //     fetch ('info.json')
    //     .then(res => res.json())
    //     .then(data =>setBlogTitles(data))
    // }, [])


let total = 0;
for(const news of cart ){
    total =  total + news.readTime;
    }

 

    return (
        <div>     
                <div className='cart-blog p-3 rounded-2'>
                    <h6 className='fw-bold'>bookmarked Blog:{cart.length} </h6>
                    <div id='bookmark-div' className='bookmark-div p-2'>
                        <h6><Bookmark bookmark = {cart} ></Bookmark></h6>
                 {/* {
                    blogTitles.map(blogTitles=> <Bookmark 
                        key={blogTitles.id}
                        blogTitles ={blogTitles}
                        ></Bookmark>)
                } */}
                      <ToastContainer></ToastContainer>
                    </div>
                </div>
        </div>
    );
};

export default Cart;
