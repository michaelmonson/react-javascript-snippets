import React from 'react';

// don't change the Component name "App"
export default function App() {
    
    const [deleteStatus, setDeleteStatus] = React.useState(false);
    
    const deleteClickHandler = () => {
      setDeleteStatus(true);
    }
    
    const proceedClickHandler = () => {
      setDeleteStatus(false);
    }

    return (
      <div>
        { deleteStatus && 
            <div id="alert">
              <h2>Are you sure?</h2>
              <p>These changes can't be reverted!</p>
              <button onClick={proceedClickHandler}>Proceed</button>
            </div>
        }
        <button onClick={deleteClickHandler}>Delete</button>
      </div>    
    );
}