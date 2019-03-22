import React from 'react';



const charCompnent = (props) => {
    const style = {
        display :'inline-block',
        padding : '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'centre' 
    };
    return (
        <div style={style} onClick = {props.clicked}>
                {props.letter} 
                
        </div>
    )
};



export default charCompnent;