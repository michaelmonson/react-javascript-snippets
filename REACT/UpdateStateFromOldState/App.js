import React from 'react';

import './styles.css';

/**
 * PURPOSE:  Updating State Based On Older State
 * 
 * Build a basic counter that should increment whenever the "Increment" button is clicked.
 * Whilst this task allows you to apply your general knowledge about event handling and state,
 * the state must also be updated following React best practices!
 * 
 * @returns JSX Snippet which is rendered through ReactJS
 */
export default function App() {
    
    const [clickCounter, setClickCounter] = React.useState(0);
    
    function buttonClickHandler() {
        //setClickCounter(event.counter)
        setClickCounter(previousCount => previousCount + 1);
    }
    
    return (
      <div>
        <p id="counter">{clickCounter}</p>
        <button onClick={buttonClickHandler}>Increment</button>
      </div>
    );
}
