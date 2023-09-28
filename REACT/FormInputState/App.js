import React from 'react';

import './styles.css';

export default function App() {
    
    function messageChangeHandler(event) {
        const value = event.target.value;
        
        if (value.trim().length < 3) {
            setMessageValidity("Invalid message")
        } else {
            setMessageValidity("Valid message!  We can use it!");
        }
        
        // setUpdatedMessage(event.target.value);
    }
    
    const [messageValidity, setMessageValidity] = React.useState('Invalid message');
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={messageChangeHandler} />
            <p>{messageValidity}</p>
        </form>
    );
}