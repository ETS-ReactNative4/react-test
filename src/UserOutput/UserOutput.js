import React from 'react';
import './UserOutput.css';

const userOutput = (props) =>{

    return (
    <div className='UserOutput' >
    <h1>{props.username}</h1>
    <p>Lorem ipsum hac diam donec interdum vulputate pellentesque vehicula posuere suscipit odio, quisque tellus odio donec a netus mi sollicitudin aenean integer, per aliquet aptent etiam eros nibh etiam lobortis nibh ipsum.

Commodo nunc himenaeos faucibus praesent lacinia nisl, quisque ultricies sapien congue habitasse senectus nunc, nostra posuere pharetra luctus hendrerit arcu non nec facilisis condimentum rhoncus, ante adipiscing sociosqu ad aenean laoreet, conubia urna donec sodales.

Vel purus ut vitae hac conubia interdum sem, dictumst lacus non donec potenti nunc et luctus, eros neque tempor nullam fusce quisque.

Lobortis sed duis consequat id habitasse bibendum, quam nulla curabitur porttitor suscipit tristique nostra, gravida et aliquam mattis pharetra tortor morbi aliquam urna amet praesent.

Nullam vulputate magna scelerisque gravida justo placerat tortor senectus, lorem ultrices risus amet vulputate sagittis urna, dui hac morbi faucibus class ultrices justo.</p>
    
    
    </div>    
        )

};

export default userOutput;