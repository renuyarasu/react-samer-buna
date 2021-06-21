import React, { useState } from 'react';

function Button() {
    const [counter, setCounter] = useState(0);
    return (
        <button onClick={() => console.log(Math.random())}>{counter}</button>
    )
}
export default Button;