import React from 'react';
import Time from '../Time/Time';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;


let total = 0;
let totalRead = "";
for(const news of cart ){
    total =  total + news.readTime;
    totalRead=  total + news.blogTitle;
    totalRead = [...totalRead,news.blogTitle];
    }
 

    return (
        <div>
            
                <div className='cart-blog p-3 rounded-2'>
                    <h6 className='fw-bold'>bookmarked Blog:{cart.length} </h6>
                    <div className='bg-light p-2'>
                        <h6>{totalRead}</h6>
                    </div>
                </div>
        </div>
    );
};

export default Cart;
