import React from 'react';

function createInitialCount() {
    console.log('createInitialCount')
    return 1;
}

function StateHook() {
    const [count, setCount] = React.useState(createInitialCount);

    function updateCount() {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // callback function of setState
        // syntax function: arrow function
        // updater function
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
    }
    
    return (
        <div>
            <h1>StateHook</h1> <br />
            Count: {count} <br />
            <button type="button" onClick={updateCount}>Update Count</button>
        </div>
    )
}

export default StateHook