import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between mt-10 border-b border-slate-300 p-5'>
                <h2 className='text-5xl font-bold '>Knowledge Cafe</h2>
                <img src="../../../image/header.png" alt="" />
            </div>
            {/* <hr className= 'mt-5 bg-slate-500'/> */}
            
        </div>
    );
};

export default Header;