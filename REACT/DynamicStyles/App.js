import React from 'react';

export default function App() {
    
    const [isToggled, setIsToggled] = React.useState(false);
    
    function toggleHighlightHandler() {
      setIsToggled(isHightlighted => !isHightlighted);
    };
    
    return (
        <div>
            <p style={{ color: isToggled ? 'red' : 'white'}}>Style me!</p>
            <button onClick={toggleHighlightHandler}>Toggle style</button>
        </div>
    );
}
