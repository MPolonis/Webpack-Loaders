import React from 'react';

const Title = props => 
<div>
    <h1>{props.title}</h1>
    <p>Number of tasks to do: {props.taskNumber}</p>
</div>;

export default Title; 