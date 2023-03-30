import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    return (
        <div>
            <div className='cart-time mb-4 p-3 rounded-4'>
                <h6 className='fw-bold'>Spent time on read: </h6>
                </div>
                <div className='cart-blog p-3 rounded-2'>
                    <h6 className='fw-bold'>bookmaed Blog:{cart.length} </h6>
                    </div>
        </div>
    );
};

export default Cart;