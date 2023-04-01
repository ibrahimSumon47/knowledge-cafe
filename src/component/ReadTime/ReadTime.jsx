import React, {useState} from 'react';

const ReadTime = (props) => {
    return (
        <div>
            <h3>Spent Time: {props.time} min</h3>
        </div>
    );
};

export default ReadTime;