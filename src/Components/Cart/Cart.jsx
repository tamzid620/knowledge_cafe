import React, { useEffect, useState } from 'react';
import Time from '../Time/Time';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import Bookmark from '../Bookmark/Bookmark';

const Cart = (props) => {
    const cart = props.cart;


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
                      <ToastContainer></ToastContainer>
                    </div>
                </div>
        </div>
    );
};

export default Cart;
