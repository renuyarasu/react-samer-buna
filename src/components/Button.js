import React, { useState } from 'react';

function Button() {
    const [counter, setCounter] = useState(0);
    const handleClick = () => setCounter(counter + 5);
    return (
        <button onClick={handleClick}>{counter}</button>
    )
}
export default Button;