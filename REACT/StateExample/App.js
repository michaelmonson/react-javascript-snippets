import React, { useState } from 'react';

import './styles.css';

export default function App() {
    const [price, setPrice] = React.useState(100);
    
    function clickHandler() {
        setPrice(75);
    }
    
    return (
        <div>
            <p>${price}</p>
            <button onClick = {clickHandler}>Apply Discount</button>
        </div>
    );
}
