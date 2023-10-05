Exercise: Outputting Conditional Content

You're working on a part of a web app that's responsible for showing a warning when a user is about to perform a dangerous action.

Therefore, your task is to conditionally show a warning box once a user has clicked a specific button. Inside that warning dialog, another button allows users to dismiss the warning (i.e., remove the warning box from the screen).

The finished App example should display a simple delete button, if the <button> has not been clicked yet:

When the button is clicked, a modal will appear asking if they are sure.

If the "Proceed" button is clicked, the warning box should be removed again.

For this task, you must react to clicks on both <button> elements that are part of the starting code. The second button, outside of the <div> with the id="alert", should show the <div id="alert"> (and all its content). The button inside that <div> should then hide it again (i.e., remove it from the DOM).

It's up to you whether you want to use a ternary expression or store the conditionally shown JSX code in a variable.

Important: In this Udemy code editor you may get an error if you use useState() - use React.useState() instead!

### SOLUTION NOTES

For this task, you need some state that controls whether the warning box is visible or not. Hence, the first step is to register such an isDeleting state that's either true (the box will be shown) or false (it will not be shown). Of course, you could use any other state name of your choice.

This state should be set to true (to later show the warning dialog) whenever the "Delete" <button> is clicked. To achieve this, the onClick prop is added and set to a function that updates the isDeleting state accordingly.

The "Proceed" <button> should do the opposite.

Next, show the <div id="alert">...</div> conditionally, based on the value of isDeleting. For example, via a ternary expression.  Alternatively, you could use the && "trick" or use an extra variable to keep the logic out of your JSX code.