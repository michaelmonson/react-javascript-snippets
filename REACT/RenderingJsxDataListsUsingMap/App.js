import React from 'react';

import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

export default function App() {
    return (
        <ul>
          { /* Render a map of Todo Items using the Todo component to render each item as a <td> element */ }
          {DUMMY_TODOS.map(todo => <Todo text = {todo} />)}
        </ul>
    );
}
