import React, { useState } from 'react';

function Button() {
    const [counter, setCounter] = useState(0);
    return <button onClick={() => setCounter(counter + 5)}>{counter}</button>
}
export default Button;