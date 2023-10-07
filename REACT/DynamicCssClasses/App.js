import React from 'react';

export default function App() {
    
    const [active, setActive] = React.useState(false);
    
    function clickHandler() {
        setActive(active => !active);
    }
    
    return (
        <div>
            <p className={active ? 'active' : ''}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}
