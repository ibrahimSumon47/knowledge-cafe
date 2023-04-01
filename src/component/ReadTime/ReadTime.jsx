import React, {useState} from 'react';

const ReadTime = (props) => {
    return (
        <div>
            <h3 className='flex justify-center text-5xl font-bold border-solid border-2 rounded-lg my-5 bg-indigo-200 text-indigo-500 p-5'>Spent Time: {props.time} min</h3>
        </div>
    );
};

export default ReadTime;