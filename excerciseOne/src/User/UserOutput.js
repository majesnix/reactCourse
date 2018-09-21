import React from 'react';

const userOutput = props => {
    const style = {
        backgroundColor: '#ccc',
        width: '60%',
        font: 'inherit',
        border: '1px solid black'
    };

    return (
        <div style={style}>
            <p>{props.username}</p>
            <p>testo</p>
        </div>
    );
};

export default userOutput;
