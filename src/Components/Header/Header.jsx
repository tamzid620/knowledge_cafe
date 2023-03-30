import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div>
            <h2>Programming Fair</h2>
            </div>
            <div  className='navimg'>
                <img src="/programmer.jpg" alt="" />
            </div>
        </nav>
    );
};

export default Header;