import React, { useState } from 'react';
function result() {
    console.log(Math.random());
}

function Button() {
    const [counter, setCounter] = useState(0);
    return (
        <button onClick={result}>{counter}</button>
    )
}
export default Button;