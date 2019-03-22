import React from 'react';

const listener = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value= {props.typed}/>
            <p>{props.len}</p>
        </div>
    )
};



export default listener;