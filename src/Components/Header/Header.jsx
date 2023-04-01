import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='ms-5 me-5 d-flex justify-content-between mt-3 mb-3'>
            <div>
            <h2>Programming Fair</h2>
            </div>
            <div  className='navimg'>
                <img className='rounded-5' src="/program.png" alt="" />
            </div>
            </nav>
    );
};

export default Header;