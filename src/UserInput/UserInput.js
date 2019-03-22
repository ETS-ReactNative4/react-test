import React from 'react';

const userInput = (props) =>{
    const tweaks = {
        width : '60%',
        margin: "auto",
        border: "1px solid #eee",
        padding: "10px",
        margin: "15px"
        
    };

    return (
    <div className='tweaks'>
    <h3>UserName:</h3>
    <input type="text" value={props.username} onChange={props.change}/> 
    </div>    
        )

};

export default userInput;