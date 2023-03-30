import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between mx-80 my-10'>
            <div>
            <h2 className='text-3xl font-semibold'>Knowledge Cafe</h2>
            </div>
            <div>
                <img src="../../../image/header.png" alt="" />
            </div>
        </div>
    );
};

export default Header;