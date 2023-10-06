## Playing with Dynamic Styles!

### Dynamically apply a style (color: red) to the <p>Style me</p> element.

The style should be applied as an inline style (i.e., via the style attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, the styling should switch back to color: white, which should also be the initial style.

The button toggles between these two styles (color: white <=> color: red).

For this task, you need some state that changes whenever the button is clicked - this state can then be used to derive and set the inline styling dynamically.  This highlighted state should be changed whenever the <button> is clicked - hence the onClick prop and a fitting function (e.g., named clickHandler) is required.

Important: Here, the setHighlighted() state updating function uses a function to set the new state - this is done to follow the common best practice of using such a function if the new state is based on the previous state. Here, the new state is the opposite of the old state (!isHighlighted sets true to false and vice versa).


Finally, it's time to set the text color of the <p> element dynamically - for this task, as requested, by dynamically applying an inline style.

Important: This is not some special syntax that would require double curly braces! Instead, the style prop is set to a non-string value (hence curly braces are required). In this case, the value is a JavaScript object that contains the CSS style properties - hence the second pair of curly braces (JS objects can be created via curly braces).