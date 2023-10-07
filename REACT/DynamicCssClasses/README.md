## Exercise: Dynamic CSS Classes

This mini example shows how to apply a CSS class (active) to the <p>Style me</p> element in the provided React app. This is very similar to the "DynamicStyles" coding exercise example.  But instead of inline CSS styles, we can set a CSS class dynamically - instead of an inline style.

The style will be applied as an CSS class (i.e., via the className attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, all CSS classes should be removed from the <p> element (this should also be the initial state).

The button toggles between these two styles (no CSS class <=> active  CSS class).

    Keep in mind that, when using the style prop, you should assign an object as a value - not a string

    You can, for example, set values dynamically in the style prop object via a ternary expression

    You will need some state that's changed upon button clicks to update the style

For this task, you need some state that changes whenever the button is clicked - this state can then be used to add or remove the active CSS class dynamically.

Therefore, as a first step, add some state like this (to the App component function):

    const [highlighted, setHighlighted] = React.useState(false);


This highlighted state should be changed whenever the <button> is clicked - hence the onClick prop and a fitting function (e.g., named clickHandler) is required:

    export default function App() {
        const [highlighted, setHighlighted] = React.useState(false);
        
        function clickHandler() {
            setHighlighted(isHighlighted => !isHighlighted);
        }
        
        return (
            <div>
                <p>Style me!</p>
                <button onClick={clickHandler}>Toggle style</button>
            </div>
        );
    }

Important: Here, the setHighlighted() state updating function uses a function to set the new state - this is done to follow the common best practice of using such a function if the new state is based on the previous state. Here, the new state is the opposite of the old state (!isHighlighted sets true to false and vice versa).


Finally, it's time to add or remove the active CSS class to / from the <p> element. This is achieved by setting the className prop to either 'active' or '' (an empty) string, based on the value of highlighted:

    import React from 'react';
     
    // don't change the Component name "App"
    export default function App() {
        const [highlighted, setHighlighted] = React.useState(false);
        
        function clickHandler() {
            setHighlighted(isHighlighted => !isHighlighted);
        }
        
        return (
            <div>
                <p className={highlighted ? 'active' : ''}>Style me!</p>
                <button onClick={clickHandler}>Toggle style</button>
            </div>
        );
    }