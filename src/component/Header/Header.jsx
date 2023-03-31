import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between mt-10'>
                <h2 className='text-3xl font-semibold'>Knowledge Cafe</h2>
                <img src="../../../image/header.png" alt="" />
            </div>
            <hr className= 'mt-5'/>
            
        </div>
    );
};

export default Header;