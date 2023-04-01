import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='ps-5 pe-5 d-flex justify-content-between pt-2 pb-2 mb-3'>
            <div >
            <h2 className='h2'>Programming Fair</h2>
            </div>
            <div  className='navimg'>
                <img className='rounded-5' src="/program.png" alt="" />
            </div>
            </nav>
    );
};

export default Header;